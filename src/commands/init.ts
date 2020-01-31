import { CommandModule } from "yargs";

export const command: CommandModule["command"] = "init";
export const describe: CommandModule["describe"] =
    "Initialise un nouveau projet";
export const handler: CommandModule["builder"] = (argv) => {
    console.log("Hello, World");
    return argv;
};
