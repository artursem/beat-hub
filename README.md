# beathub

## Table of contents

- [General Info](#general-info)
- [Demo](#demo)
- [Built with](#built-with)
- [Features](#features)
- [Setup](#setup)

## General info

Next.js application allowing user to look up information on music bands and artists, read bio, browse top albums and similar artists. App lets user add favorite bands to library saved in local storage. All the data, including photos comes from [Napster REST API](https://developer.napster.com/api/v2.2).

## Demo

Here is a working live demo: [beat-hub.vercel.app](https://beat-hub.vercel.app/)

## Built with

- Next.js 12.1.0
- TypeScript 4.3.4
- Redux 7.2.0
- Redux Toolkit 1.3.6
- Chakra UI 1.8.6

## Features

A few of the things you can do witch beathub:

- Home page displays top 5 streamed artists and albums of the current week
- Searchbar allows searching for artists
- Each artist page displays photo and short bio (if available), top 5 albums and five similar artists
- 'Add to library' button adds band to library of favorite artists, and shows popup message with confirmation
- Favorite artists can be viewed at `/library` route
- 'Light mode' / 'Dark mode' button switches ui theme

## Setup

To run your local instance of this app clone this repository, install dependencies and run dev server:

```bash
# Clone this repository
git clone https://github.com/artursem/beat-hub.git

# Go into repo directory
cd beat-hub

# Install dependencies
npm install

# Run the app
npm run dev
```

In order for app to run correctly, you'll need to obtain your own api key from [Napster API](https://developer.napster.com/apps) and provide it as `NEXT_PUBLIC_API_KEY` in `.local.env` file in top directory.
