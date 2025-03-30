"use strict";

const  { Engine } = require("../lib/classes/engine/engine");
const { CreateInstance,
        RaiseEvent,
        CommitJob } = require("../lib/classes/engine/commands/commands");
const { Constants } = require("../lib/classes/util/constants");
const { Parser } = require("../lib/classes/parser/parser");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const util = require("util");

// get all test files in assets and subfolders
let testFiles = [];
let findTests = function(dir, filelist) {    
    let files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
        if (fs.statSync(dir + "/" +
            file).isDirectory()) {
            filelist = findTests(dir + "/" + file, filelist);
        } else {
            if (file.endsWith(".bpmn.test.js")) {
                filelist.push({
                    test: dir + "/" + file,
                    bpmn: dir + "/" + file.replace(".test.js","")
                });
            }
        }
    });
    return filelist;
};


describe("Test BPMN Engine", () => {

    const parser = new Parser();
    let processData = null;
    let processId = uuid();
    let instanceId = uuid();
    let ownerId = uuid();

    let testFiles = findTests("./assets");

    for (let i=0; i<testFiles.length; i++) {
        let testFile = testFiles[i];
        let xmlData = fs.readFileSync(testFile.bpmn).toString();
        let tests = require("../" + testFile.test);
        for (let j=0; j<tests.length; j++) {
            let test = tests[j];
            const parsedData = parser.parse({id: processId, xmlData, objectName: test.case, ownerId });
            if (test.analyse?.parse) console.log(util.inspect(parsedData, { showHidden: false, depth: null, colors: true }));
            it("it should execute " + testFile.bpmn + " - " + test.case, async () => {
                expect(parsedData).toBeDefined();
                // for each test case create a new engine instance
                const engine = new Engine();
                for (let n=0; n<test.commands.length; n++) {
                    let command = test.commands[n];
                    if (command.command === "CreateInstance") {
                        await engine.execute(new CreateInstance({ instanceId, processData: parsedData.processCollection[0] }));
                    } else if (command.command === "RaiseEvent") {
                        await engine.execute(new RaiseEvent({ instanceId, eventId: command.eventId, payload: command.payload }));
                    } else if (command.command === "CommitJob") {
                        // find the job by task type - we need the jobId
                        const version = engine.getVersion();
                        const jobs = await engine.getJobs({ version });
                        if (test.analyse?.steps) console.log(util.inspect(jobs, { showHidden: false, depth: null, colors: true }));
                        const job = jobs.find((job) => job.taskDefinition?.type === command.task);
                        expect(job).toBeDefined();
                        // commit the job
                        await engine.execute(new CommitJob({ jobId: job.jobId, result: command.result }));
                    }
                }
                // retrieve final state
                if (test.analyse?.events) {
                    const inspect = await engine.inspect();
                    console.log(util.inspect(inspect.events, { showHidden: false, depth: null, colors: true }));                    
                }
                const version = engine.getVersion();

                const jobs = await engine.getJobs({ version });
                const throwing = await engine.getThrowing({ version });
                if (test.analyse?.result) {
                    console.log(util.inspect(jobs, { showHidden: false, depth: null, colors: true }));
                    console.log(util.inspect(throwing, { showHidden: false, depth: null, colors: true }));
                }
                // check expected result
                if (test.result.throwing) {
                    test.result.throwing.forEach((item) => {
                        expect(throwing).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ eventId: item.eventId, payload: item.payload })
                            ])
                        );
                    });
                }
                if (test.result.jobs) {
                    test.result.jobs.forEach((item) => {
                        expect(jobs).toEqual(
                            expect.arrayContaining([
                                expect.objectContaining({ taskDefinition: item.taskDefinition, data: item.data })
                            ])
                        );
                    });
                }
            });
        };
    }

});
