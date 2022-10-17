const code = require('@actions/core');
const github = require('@actions/github');

try{
    const nameToGreed = core.getInput('who-to-greed'); 
    console.log(`Hello ${nameToGreed}`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${[payload]}`)

}catch(error) { 
    core.setFailed(error.message)
}