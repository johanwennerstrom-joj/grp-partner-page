[Team String X GRP Partner Page Demo](https://grp-partners.netlify.app/)

# What is this?

For an assignment in Hyper Island's Frontend Developer course, we were given the task of making a demo for a new partner page for the Global Resilience Partnership.

## Who worked on it?

Team members included

- [Johan Wennerström ](https://github.com/johanwennerstrom-joj)
- [Quena Soruco ](https://github.com/quena)
- [Hamza Khan](https://github.com/hamzakhan0412)
- [Arlind Pestisha](https://github.com/ArlindPestisha)
- [David Herron](https://github.com/dvdherron)

## How did we make it?

We used data from a provided Excel spreadsheet to populate the content of the partner cards on the page. The data was manually converted into a .json file.

Logos for each partner were uploaded to Cloudinary and the respective image link for each partner was inserted as another property in the .json file. Using Cloudinary urls for the logos allowed us to edit file types, aspect ratios, and image dimensions on the fly.

We used ITC Franklin Gothic LT Pro Condensed for the main section headings and ITC Franklin Gothic LT Pro Compressed for the introduction paragraph and smaller titles on the partner cards. Arial and Arial bold for the rest of the body text.

**The Filter**
Our version allows one to select one feature from the dropdown menu by which to search. Hitting the "apply filter" button will return results that match the filter chosen. If we had had more time we would have allowed for as many filters as possible to be applied at the same time.

## How can someone run this locally?

We built our demo using [Gatsby JS](https://www.gatsbyjs.org/)

To run the project on your own computer, start with [these steps](https://www.gatsbyjs.org/tutorial/part-zero/) from Gatsby on getting your machine set up. Then clone this repository onto your machine and install the dependencies.
