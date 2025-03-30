const { Logger } = require("../lib/classes/util/logger");

describe("Test Logger Class", () => {
    let logger;

    beforeEach(() => {
        logger = new Logger();
    });

    test("should initialize with default values", () => {
        expect(logger.level).toBe(0);
        expect(logger.name).toBe("default");
    });

    test("should set the logging level", () => {
        logger.setLevel(3);
        expect(logger.level).toBe(3);
    });

    test("should set the logger name", () => {
        logger.setName("testLogger");
        expect(logger.name).toBe("testLogger");
    });

    test("should log messages with the correct level", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
        logger.log("INFO", "Test message", { key: "value" });
        expect(consoleSpy).toHaveBeenCalledWith("INFO: Test message", { key: "value" });
        consoleSpy.mockRestore();
    });

    test("should log debug messages", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
        logger.debug("Debug message");
        expect(consoleSpy).toHaveBeenCalledWith("DEBUG: Debug message", expect.anything());
        consoleSpy.mockRestore();
    });

    test("should log info messages", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
        logger.info("Info message");
        expect(consoleSpy).toHaveBeenCalledWith("INFO: Info message", expect.anything());
        consoleSpy.mockRestore();
    });

    test("should log warn messages", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
        logger.warn("Warn message");
        expect(consoleSpy).toHaveBeenCalledWith("WARN: Warn message", expect.anything());
        consoleSpy.mockRestore();
    });

    test("should log error messages", () => {
        const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
        logger.error("Error message");
        expect(consoleSpy).toHaveBeenCalledWith("ERROR: Error message", expect.anything());
        consoleSpy.mockRestore();
    });
});