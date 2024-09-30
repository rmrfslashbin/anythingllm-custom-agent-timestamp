// This is the main entry point of the tool. It is the first file that gets executed when the tool is invoked.

module.exports.runtime = {
    // This is the handler function that is called when the tool is invoked.
    handler: async function ({}) {
        // This sets the callerId to the name and version of the tool.
        const callerId = `${this.config.name}-v${this.config.version}`;
      try {
        // Let the user know we're running the tool
        this.introspect(
          `${callerId} called...`
        );
        // Run the tool
        return JSON.stringify({
            // return the current time in ISO format
            "currentUTCTimeISO": this._getCurrentUTCTimeISO()
        });
      } catch (e) {
        // If the tool fails, let the user know
        this.introspect(
          `${callerId} failed to invoke. Reason: ${e.message}`
        );

        // Log the error
        this.logger(
          `${callerId} failed to invoke.`,
          e.message
        );

        // Return a message to the user
        return `The tool failed to run for some reason. Here is all we know ${e.message}`;
      }
    },
    // This is a helper function that returns the current time in ISO format
    _getCurrentUTCTimeISO() {
        return new Date().toISOString();
    },
};
