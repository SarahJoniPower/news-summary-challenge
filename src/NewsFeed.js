class NewsFeed {
  constructor() {
    this.allStories = [];
  }

  getStories() {
    return this.allStories;
  }

  addStory(story) {
    this.allStories.push(story)
  }
}