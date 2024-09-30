// This file is used to run the handler function locally.
const currentTime = require('./handler');

async function main() {
    // Create a mock context object
    const context = {
      config: {
        name: 'CurrentTime',
        version: '0.0.1'
      },
      introspect: console.log,
      logger: console.error
    };
  
    // Merge the context with the runtime object
    const mergedContext = { ...currentTime.runtime, ...context };
  
    // Call the handler function
    const result = await currentTime.runtime.handler.call(mergedContext, {});
    console.log(result);
}
  
main().catch(console.error);