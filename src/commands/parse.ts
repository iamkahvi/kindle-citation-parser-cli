import {Command, Flags} from '@oclif/core'
const fs = require('fs')
// @ts-ignore
import {parser} from 'kindle-citation-extractor'

export default class Parse extends Command {
  static description =
    'Parse a my citation.txt file into a citation.json file.';

  static examples = [
    '<%= config.bin %> <%= command.id %> ./citation.txt ./citation.json',
  ];

  static flags = {
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
  };

  static args = [{name: 'inputFile'}, {name: 'outputFile'}];

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Parse)

    const name = flags.name ?? 'world'
    this.log(
      `hello ${name} from /Users/Kahvi/Developer/citation-parser/src/commands/parse.ts`,
    )
    if (args.inputFile && args.outputFile) {
      this.log(`inputFile: ${args.inputFile}`)
      this.log(`outputFile: ${args.outputFile}`)

      const clippings = fs.readFileSync(args.inputFile, 'utf-8')
      this.log(clippings)
      const data = parser(clippings)

      fs.writeFile(args.outputFile, JSON.stringify(data), function (err: any) {
        if (err) throw err
        console.log('Saved!')
      })
    }
  }
}
