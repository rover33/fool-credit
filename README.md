# foolapp


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### How to Embed
```
To embed in a current page you will need to pull the TwoCard and CardSeach component into the main app i.e App.vue.
The CardSearch takes a prop called "search" which allows it to look through the data for the matching search paramaters.
The TwoCard takes two props. cardOneData and cardTwoData. Just as they sound we need to get the data from the two different card pairs to be able to display the data.
Lastly, the develeoper will need to write a filter function for the the search to filter through the cards based on credit score and card type.
```

### Design Decesions and Reasoning
```
I desgined the page off the exisitng card comparison tool on the Ascent Webpage. I was able to get the correct colors and look and feel by inspecting the page. I was unable to find a search type field with dropdowns, so I created my own using the same color scheme. I made the search with drop downs so they could easily choose between them. I could have done this with radio buttons, but i felt the dropdowns looked a little cleaner.
```

### Code Sandbox Link
```
https://codesandbox.io/s/dark-dust-xwzmt?file=/src/App.vue
```
