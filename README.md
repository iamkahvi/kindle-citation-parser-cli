## citation-parser

[Amazon Kindles](https://www.wikiwand.com/en/Amazon_Kindle) give you a `My Clippings.txt` file that contains all your highlights.

This CLI converts the text into JSON using [kindle-citation-extractor](https://github.com/mxro/kindle-citation-extractor).

### Usage

Requires Node v16.16.0 or higher.

```bash
./bin/dev parse My\ Clippings.txt out.json
```

### Description

Turns this:
```txt
The Premonition: A Pandemic Story (Lewis, Michael)
- Your Highlight on page 233 | Location 3332-3334 | Added on Sunday, December 18, 2022 3:19:56 PM

“Carter’s emails should be framed as a national monument,” said Charity. “They drove decisions in California.”†
==========
The Premonition: A Pandemic Story (Lewis, Michael)
- Your Highlight on page 268 | Location 3785-3786 | Added on Monday, December 19, 2022 12:09:59 PM

The United States was sequencing fewer of its genomes than any other industrialized country, and the only reason it was sequencing as many as it was is that a bunch of nonprofits had stepped in to do it, haphazardly, for free.
==========
```

into this:

```json
[
  {
    "book": "The Premonition: A Pandemic Story",
    "author": "Lewis, Michael",
    "quote": "“Carter’s emails should be framed as a national monument,” said Charity. “They drove decisions in California.”†",
    "page": "page 233",
    "location": "Location 3332-3334",
    "dateAdded": "2022-12-18T20:19:56.000Z"
  },
  {
    "book": "The Premonition: A Pandemic Story",
    "author": "Lewis, Michael",
    "quote": "The United States was sequencing fewer of its genomes than any other industrialized country, and the only reason it was sequencing as many as it was is that a bunch of nonprofits had stepped in to do it, haphazardly, for free.",
    "page": "page 268",
    "location": "Location 3785-3786",
    "dateAdded": "2022-12-19T17:09:59.000Z"
  }
]
```
