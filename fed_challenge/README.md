# FED Challenge

1. Pick your top 10+ fav books, movies, video games, food, or whatever you wish. Build an Angular + ngrx/store app that lists these items.

I picked food!

2. Create a rating system where you can rate each item.  Order the list by the highest rated item to lowest rated item. Re-order the list, if needed, when user ranks an item.

I request sorting and descending (highest to lowest) order when I pull food items. I used simple dropdowns (between 1 and 5) for rating. After each PUT (update for rating), I reorder again.

3. Using RxJS, randomly rate items at random times, also re-ordering the list as necessary.

I used the Interval operator which returns an Observable at intervals at a random time between a min and max time range. E.g. I have between 1 and 20 seconds. I then use the same logic, where I select one of the items to update, a random one between indices 0 and 9 (as I have 10 items), and this gets updated with a random rating between 1 and 5.

# How to run

I used 'json-server' as my REST API service. Within the fed_challenge/server folder:

- install json-server: 'npm install -g json-server'.
- start json-server: 'json-server -- watch db.json'.

Angular-CLI:

- install angular-cli: 'npm install -g @angular/cli'

And go..
Withing fed_challenge/fed_challenge:
- npm install
- ng serve (for a dev server). Navigate to 'http://localhost:4200/'.
