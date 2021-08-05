const express=require('express');
const authorsRouter=express.Router();
function router(nav){
    var authors=[{
       img:'Arundhati.jpg' ,title:"Arundhati Roy",tag:"Indian author, actress, and activist",txt:'Arundhati Roy, full name Suzanna Arundhati Roy, (born November 24, 1961, Shillong, Meghalaya, India), Indian author, actress, and political activist who was best known for the award-winning novel The God of Small Things (1997) and for her involvement in environmental and human rights causes.'
    ,more:              " In 1997 Roy published her debut novel, The God of Small Things to wide acclaim. The semiautobiographical work departed from the conventional plots and light prose that had been typical among best-sellers. Composed in a lyrical language about South Asian themes and characters in a narrative that wandered through time, Roy’s novel became the biggest-selling book by a nonexpatriate Indian author and won the 1998 Man Booker Prize for Fiction.                        Roy’s subsequent literary output largely consisted of politically oriented nonfiction, much of it aimed at addressing the problems faced by her homeland in the age of global capitalism. Among her publications were Power Politics (2001), The Algebra of Infinite Justice (2002), War Talk (2003), Public Power in the Age of Empire (2004), Field Notes on Democracy: Listening to Grasshoppers (2009), Broken Republic: Three Essays (2011), and Capitalism: A Ghost Story (2014). In 2017 Roy published The Ministry of Utmost Happiness, her first novel in 20 years. The work blends personal stories with topical issues as it uses a large cast of characters, including a transgender woman and a resistance fighter in Kashmir, to explore contemporary India."}
    ,{
        img:'John Green.jpg',title:'John Green',tag:'American author and YouTube content creator',txt:'John Green is the New York Times bestselling author of Looking for Alaska,  An Abundance of Katherines, Paper Towns, The Fault in Our Stars, Turtles All the Way Down, and the essay collection The Anthropocene Reviewed. He is one half of the vlogbrothers on YouTube and co-creator of educational series Crash Course. ',
        more:'He is also the coauthor, with David Levithan, of Will Grayson, Will Grayson. He was the 2006 recipient of the Michael L. Printz Award, a 2009 Edgar Award winner, and has twice been a finalist for the Los Angeles Times Book Prize. Green’s books have been published in more than 55 languages and over 24 million copies are in print. '
    },
{
    img:'kamala.jpeg',title:'Kamala Surayya',tag:'Indian author',txt:'Muslim name Kamala Surayya, (born March 31, 1934, Thrissur, Malabar Coast [now in Kerala], British India—died May 31, 2009, Pune, India), Indian author who wrote openly and frankly about female sexual desire and the experience of being an Indian woman. Das was part of a generation of Indian writers whose work centred on personal rather than colonial experiences, and her short stories, poetry, memoirs, and essays brought her respect and notoriety in equal measures. Das wrote both in English (mostly poetry) and, under the pen name Madhavikutty, in the Malayalam language of southern India.',
    more:'Das’s poetry collections included Summer in Calcutta (1965), The Descendants (1967), and The Old Playhouse, and Other Poems (1973). Subsequent English-language works included the novel Alphabet of Lust (1976) and the short stories “A Doll for the Child Prostitute” (1977) and “Padmavati the Harlot” (1992). Notable among her many Malayalam works were the short-story collection Thanuppu (1967; “Cold”) and the memoir Balyakalasmaranakal (1987; “Memories of Childhood”). Perhaps her best-known work was an autobiography, which first appeared as a series of columns in the weekly Malayalanadu, then in Malayalam as Ente Katha (1973), and finally in English as My Story (1976). A shockingly intimate work, it came to be regarded as a classic. In later life Das said that parts of the book were fictional.'
}]
    
    authorsRouter.get('/',(req,res)=>{
        res.render('authors',{title:'Authors',nav,authors})
    });
    authorsRouter.get('/:i',(req,res)=>{
        const i=req.params.i;
        res.render('author',{title:'Author',nav,authors:authors[i]})
    })
    return authorsRouter;
}
module.exports=router;