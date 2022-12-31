import {Command} from '@oclif/core'

export default class World extends Command {
  static description = 'Say hello world';

  static examples = [
    `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`,
  ];

  static flags = {};

  static args = [{name: 'citationFile'}, {name: 'outputFile'}];

  async run(): Promise<void> {
    const {args} = await this.parse(World)
    this.log(args.citationFile)
    this.log(args.outputFile)

    this.log('hello!!!')
    this.log('hello world! (./src/commands/hello/world.ts)')
  }
}
