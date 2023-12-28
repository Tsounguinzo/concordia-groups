# concordia-groups

It's really annoying when you can't find a simple group to ask quick questions. Maybe you're stuck on homework, 
forgot where your exam is, or just want to talk about a tough exam. We need study groups for our classes for stuff 
like this.

Concordia-Groups shows that joining these groups should be easy. I made groups on WhatsApp and Discord. 
Discord can be tricky, so not everyone uses it, but WhatsApp is easier for more people.

Concordia-Groups is a tool to help you join study groups easily on WhatsApp or Discord, 
so everyone can get the help they need.

# How does it work?
Magic!

# Well, really, how does it work?
Concordia-Groups is based on a hashmap that maps each course to its corresponding WhatsApp group link. 
So, am I essentially saying it's hardcoded? Yes, you're right; you can find it @ [/src/lib/courseToWhatsAppLink.ts](https://github.com/Tsounguinzo/concordia-groups/blob/main/src/lib/courseToWhatsAppLink.ts)

Why hardcoding? Well, sometimes when you've got free time, you just go with the flow, even if it seems a bit silly. 
But don't worry, I plan to move everything to Firestore eventually for more flexibility.

About those Discord links? Yeah, they all lead to my server right now. I totally need to switch from this hardcoded 
stuff to Firestore. Imagine the hassle if I start using different Discord links for each group. 
That would be a real headache. So, Firestore, here we come!

Concordia-Groups uses the [concordia open data api](https://www.concordia.ca/web/open-data.html?utm_source=vanity&utm_campaign=opendata) to collect information
about the courses, you can find that @ [/src/routes/api/courses/validators.ts](https://github.com/Tsounguinzo/concordia-groups/blob/main/src/routes/api/courses/%2Bserver.ts), it Caches
the data for like one week and all the data is basically in an array of courses that i play around with.

Each course in Concordia-Groups features a "More Info" button underneath. When you click this button, 
it whisks you away to the course's description on Concordia's website. This is done using assisted web scrapping, 
haha the "assisted" is just a fun touch, you can find the scraping part @ [/src/lib/courseMoreInfo.ts/getCourseIdByTitle](https://github.com/Tsounguinzo/concordia-groups/blob/main/src/lib/courseMoreInfo.ts)

*The search feature in Concordia-Groups is a real hoot!* Here's the deal:  each time you type a character,
the courses get ranked based on what you type and the top 20 get showed. thats it, you can see that @ [/src/lib/stores/search.ts/searchHandler](https://github.com/Tsounguinzo/concordia-groups/blob/main/src/lib/stores/search.ts)

# Are there any other website to do that out there?
No. not for concordia anyways

# I'd love to contribute. Are patches welcome?
Glad to hear it! Patches are indeed most welcome. Just open a pull request on Github
