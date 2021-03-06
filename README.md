# beathub

## Table of contents

- [General Info](#general-info)
- [Demo](#demo)
- [Built with](#built-with)
- [Features](#features)
- [Setup](#setup)

## General info

Next.js application allowing user to search for information on recording artists. Home page offers charts of top streamed artists and albums of the current week built with incremental static regeneration. Search box provides easy way to look up bands. App fetches data from [REST API](https://developer.napster.com/api/v2.2) and displays artists' photos and bio as well as top albums and list of similar artists. Library functionality allows adding bands to favourites list, which is saved in local storage.

## Demo

Here is a working live demo: [beat-hub.vercel.app](https://beat-hub.vercel.app/)

## Built with

- Next.js 12.1.0
- TypeScript 4.3.4
- Redux 7.2.0
- Redux Toolkit 1.3.6
- Chakra UI 1.8.6

## Features

A few of the things you can do with beathub:

- `/home` page displays top 5 streamed artists and albums of the current week
- Searchbar allows searching for artists
- Each artist page displays photo and short bio (if available), top 5 albums and five similar artists
- 'Add to library' button adds band to library of favorite artists and shows popup message with confirmation
- Favorite artists can be viewed at `/library` page
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
