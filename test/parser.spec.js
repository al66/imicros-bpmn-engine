"use strict";

const { Parser } = require("../lib/classes/parser/parser");
const { Constants } = require("../lib/classes/util/constants");

// helpers
const { v4: uuid } = require("uuid");
const fs = require("fs");
const util = require("util");

describe("Test parser class", () => {
    let parser = new Parser(), owner = [uuid(),uuid()];

    it("it should parse the process", async () => {
        const xmlData = fs.readFileSync("assets/examples/Camunda/Start event - End event.bpmn");
        const id = uuid();
        const objectName = "Process Example";
        const parsedData = parser.parse({id, xmlData, objectName, ownerId: owner[0]});
        expect(parsedData.processCollection).toBeDefined();
        expect(parsedData.processCollection.length).toEqual(1);
        //console.log(util.inspect(parsedData, { showHidden: false, depth: null, colors: true }));
        const parsedProcess = parsedData.processCollection[0];
        expect(parsedProcess.process.id).toEqual(id);
        expect(parsedProcess.process.versionTag).toEqual("v1");
        expect(parsedProcess.process.objectName).toEqual(objectName);
        expect(parsedProcess.process.ownerId).toEqual(owner[0]);
        expect(parsedProcess.process.versionTag).toEqual("v1");
        expect(parsedProcess.version.id).toBeDefined();
        expect(parsedProcess.version.created).toBeDefined();
        expect(parsedProcess.event.length).toEqual(2);
        expect(parsedProcess.event).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ position: Constants.START_EVENT, direction: Constants.CATCHING_EVENT }),
                expect.objectContaining({ position: Constants.END_EVENT, direction: Constants.THROWING_EVENT })
            ])
        );
    });
});
