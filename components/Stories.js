import React from 'react'
import StoryCard from './StoryCard';

const stories = [
    {
        name: "Dean Barber",
        src: "https://scontent.fatl1-1.fna.fbcdn.net/v/t1.18169-9/1235167_500674103360651_297685934_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=O5dDDpNbmcMAX-0OTMV&_nc_ht=scontent.fatl1-1.fna&oh=02c38379b411bea89588c1ff886ecf4a&oe=60CA024D",
        profile: "https://scontent.fatl1-1.fna.fbcdn.net/v/t1.18169-9/1235167_500674103360651_297685934_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=O5dDDpNbmcMAX-0OTMV&_nc_ht=scontent.fatl1-1.fna&oh=02c38379b411bea89588c1ff886ecf4a&oe=60CA024D"
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",

    },
    {
        name: "Jeff Bezos",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
        
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
        
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
        
    }
];

function Stories() {
    return (
        <div className ="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard key={story.src} name={story.name} src = {story.src} profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories
