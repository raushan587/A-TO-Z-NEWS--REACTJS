import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

    capatalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static defaultProps = {
        country: 'us',
        pageSize: 8,
        category: 'general',
        apiKey: process.env.REACT_APP_API_KEY
    }

    static propsTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        apiKey: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
           articles: [
{
"source": {
"id": null,
"name": "CNBC"
},
    "author": null,
    "title": "Here's why we're not buyers in Monday's session, even as stocks move lower",
    "description": "Every weekday, the Investing Club releases the Homestretch; an actionable afternoon update just in time for the last hour of trading.",
    "url": "https://www.cnbc.com/2025/05/05/why-were-not-buyers-even-as-stocks-move-lower-in-mondays-session.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/108139390-1746113870207-NYSE_Traders-OB-Photo-20250501-CC-PRESS-7.jpg?v=1746114141&w=1920&h=1080",
    "publishedAt": "2025-05-05T18:17:44Z",
    "content": "Every weekday, the CNBC Investing Club with Jim Cramer releases the Homestretch an actionable afternoon update, just in time for the last hour of trading on Wall Street. Market update: Stocks started… [+3188 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Electrek"
    },
    "author": "Scooter Doll",
    "title": "Chery is deploying an army of blonde humanoid robots called Mornine to sell its cars [Video]",
    "description": "If you thought Tesla or XPeng’s bipedal humanoid robots were a creepy glimpse into the future, wait until you see what Chinese automaker Chery Automotive is deploying. Alongside business partner AiMOGA, Chery is encouraging its dealers to purchase a Mornine r…",
    "url": "http://electrek.co/2025/05/05/chery-deploying-blonde-humanoid-robots-called-mornine-to-sell-cars-video/",
    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2025/05/Chery-robot-Mornine-hero.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2025-05-05T18:04:36Z",
    "content": "If you thought Tesla or XPeng’s bipedal humanoid robots were a creepy glimpse into the future, wait until you see what Chinese automaker Chery Automotive is deploying. Alongside business partner AiMO… [+3101 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Electrek"
    },
    "author": "Reinette LeJeune",
    "title": "Anker SOLIX EverFrost 2 coolers + bundles $200 off, G-Force’s new DE-S cargo e-bike $1,399, EcoFlow DELTA 2 bundle flash sale, more",
    "description": "We’re starting off this week’s Green Deals with a spotlight on Anker’s SOLIX EverFrost 2 Electric Cooler discounts that are running as part of the brand’s ongoing Mother’s Day Sale, which start from $700. Next, we have G-Force’s extended e-bike savings, inclu…",
    "url": "http://electrek.co/2025/05/05/anker-solix-everfrost-2-electric-coolers-g-force-ecoflow-more/",
    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2025/05/Anker-SOLIX-EverFrost-2-40L-Electric-Cooler-lifestyle-1-e1746466579979.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2025-05-05T18:00:20Z",
    "content": "We’re starting off this week’s Green Deals with a spotlight on Anker’s SOLIX EverFrost 2 Electric Cooler discounts that are running as part of the brand’s ongoing Mother’s Day Sale, which start from … [+12089 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "benzinga.com",
    "title": "Tesla Stock Falls On European Sales Decline, Rising Competition: What's Going On?",
    "description": "Tesla Inc. (NASDAQ:TSLA) shares are trading lower Monday after industry data showed a drop in new car sales in Spain, which appears to be adding to concerns over European performance.\nWhat To Know: New registration data from Spanish industry group ANFAC showe…",
    "url": "https://biztoc.com/x/042183d99e09f415",
    "urlToImage": "https://biztoc.com/cdn/042183d99e09f415_s.webp",
    "publishedAt": "2025-05-05T17:58:51Z",
    "content": "Tesla Inc. (NASDAQ:TSLA) shares are trading lower Monday after industry data showed a drop in new car sales in Spain, which appears to be adding to concerns over European performance.What To Know: Ne… [+144 chars]"
    },
    {
    "source": {
    "id": "the-irish-times",
    "name": "The Irish Times"
    },
    "author": "Hugh Dooley",
    "title": "Insurance stocks cover European markets’ winning streak",
    "description": "Benchmark STOXX 600 index ends 0.2% higher",
    "url": "https://www.irishtimes.com/business/2025/05/05/insurance-stocks-cover-european-markets-winning-streak/",
    "urlToImage": "https://www.irishtimes.com/resizer/v2/II26AEJJ23F73YJGGAC6EINWNA.jpg?smart=true&auth=330be37bb7149296a251cb34c7e8dd1920ba23a9577189a44921be747c3bee09&width=1200&height=630",
    "publishedAt": "2025-05-05T17:47:56Z",
    "content": "European shares extended their winning streak on Monday, with investors focusing on developments from the trade war alongside the US Federal Reserves policy meeting later this week.\r\nThe pan-European… [+4089 chars]"
    },
    {
    "source": {
    "id": "nbc-news",
    "name": "NBC News"
    },
    "author": "Michael Wayland, CNBC",
    "title": "Inside GM's decade-long battle to revive Cadillac as the quintessential American luxury car brand",
    "description": "WARREN, Mich. — Walking into General Motors’ global design headquarters is like taking a step back in time.",
    "url": "https://www.nbcnews.com/business/autos/gms-decade-long-battle-revive-cadillac-quintessential-american-luxury-rcna204845",
    "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-05/250505-cadillac-1950s-2-se-114p-9707e3.jpg",
    "publishedAt": "2025-05-05T17:28:11Z",
    "content": "GM President Mark Reuss wasnt alive to witness that era, but hes harkened back to it as he and his teams have methodically overseen a product renaissance for Cadillac, which wants to regain its promi… [+10922 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "finance.yahoo.com",
    "title": "Is It Too Late To Sell Your Tesla? 4 Options If You Don’t Want To Drive It Anymore",
    "description": "Consumer sentiment around Tesla is souring, largely due to Elon Musk’s increasingly extreme political views and public behavior. Once a status symbol, now Teslas are flooding resale platforms as owners reassess what the car — and the brand — represent.\nRead M…",
    "url": "https://biztoc.com/x/a042fb8c4239f074",
    "urlToImage": "https://biztoc.com/cdn/a042fb8c4239f074_s.webp",
    "publishedAt": "2025-05-05T17:26:04Z",
    "content": "Consumer sentiment around Tesla is souring, largely due to Elon Musks increasingly extreme political views and public behavior. Once a status symbol, now Teslas are flooding resale platforms as owner… [+145 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Securityaffairs.com"
    },
    "author": "Pierluigi Paganini",
    "title": "Kelly Benefits December data breach impacted over 400,000 individuals",
    "description": "Kelly Benefits has determined that the impact of the recently disclosed data breach is much bigger than initially believed. Benefits and payroll solutions firm Kelly & Associates Insurance Group, aka Kelly Benefits, announced that the impact of a recently dis…",
    "url": "https://securityaffairs.com/177476/data-breach/kelly-benefits-december-data-breach-impacted-over-400000-individuals.html",
    "urlToImage": "https://securityaffairs.com/wp-content/uploads/2012/04/data-breach.jpg",
    "publishedAt": "2025-05-05T17:22:11Z",
    "content": "Kelly Benefits December data breach impacted over 400,000 individuals\r\n | A hacker stole data from TeleMessage, the firm that sells modified versions of Signal to the U.S. gov\r\n | Experts shared up-t… [+161463 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "Liz Alderman",
    "title": "Europe pushes back against US tariffs, saying 'No thanks' to buying American",
    "description": "A European Central Bank study shows a growing, possibly lasting backlash against US products due to President Trump’s tariffs and rhetoric. European consumers are actively avoiding American brands like Tesla, McDonald’s, and Netflix, with boycotts and apps ai…",
    "url": "https://economictimes.indiatimes.com/tech/technology/europe-pushes-back-against-us-tariffs-saying-no-thanks-to-buying-american/articleshow/120906620.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-120906751,width-1200,height-630,imgsize-31258,overlay-ettech/articleshow.jpg",
    "publishedAt": "2025-05-05T17:22:01Z",
    "content": "For motorcycle lovers in Sweden, Harley-Davidson is the hottest brand on the road. Jack Daniels whiskey beckons from the bar at British pubs. In France, Levis jeans are all about chic. But in the tum… [+4904 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": null,
    "title": "Is It Too Late To Sell Your Tesla? 4 Options If You Don’t Want To Drive It Anymore",
    "description": null,
    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_a8170d9a-fc2e-4e29-997a-ea200116f6b9",
    "urlToImage": null,
    "publishedAt": "2025-05-05T17:05:36Z",
    "content": "If you click 'Accept all', we and our partners, including 240 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CleanTechnica"
    },
    "author": "Steve Hanley",
    "title": "Tariffs & Electric Cars: Bloomberg Says It’s Time To Welcome Chinese Cars To The US",
    "description": "Tariffs that protect local industries have some benefits, but tariffs that exclude entire nations are ultimately self-defeating. \nThe post Tariffs & Electric Cars: Bloomberg Says It’s Time To Welcome Chinese Cars To The US appeared first on CleanTechnica.",
    "url": "https://cleantechnica.com/2025/05/05/tariffs-electric-cars-bloomberg-says-its-time-to-welcome-chinese-cars-to-the-us/",
    "urlToImage": "https://cleantechnica.com/wp-content/uploads/2024/01/BYD-Explorer-No1-shipping-vessel-electric-cars-copy.jpg",
    "publishedAt": "2025-05-05T16:57:26Z",
    "content": "Sign up for CleanTechnica's Weekly Substack for Zach and Scott's in-depth analyses and high level summaries, sign up for our daily newsletter, and/or follow us on Google News!\r\nTariffs are a hot topi… [+7297 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Autoweek"
    },
    "author": "Jay Ramey",
    "title": "Another Robotaxi Service Will Launch in Texas This Year. But It's Not One You've Heard Of",
    "description": "Yet another autonomous developer is partnering with a ride-hailing app in the Lone Star state, with a 2025 launch planned.",
    "url": "https://www.autoweek.com/news/a64671247/texas-uber-robotaxis-may-mobility/",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/O.rsyvnL6e7fcmCwvE9Yvg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/autos.autoweek.com/01b43ac7ec5477906a1df7ee3729ba27",
    "publishedAt": "2025-05-05T16:53:00Z",
    "content": "<ul><li>Uber teams up with May Mobility to launch a fleet of robotaxis in Arlington, Texas, by the end of 2025.\r\n</li><li>The effort is the latest partnership between a leading app and an autonomous … [+3343 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "finance.yahoo.com",
    "title": "Why Shares of Tesla Are Sinking Today",
    "description": "In This Article:\nKey Points\n-\nThe electric vehicle maker is reportedly seeing shrinking sales in another European country.\n-\nStruggles in Tesla's core EV business has dogged the stock all year.\n-\nInvestors are laser focused on an upcoming June demonstration o…",
    "url": "https://biztoc.com/x/537bd1bce1f080b3",
    "urlToImage": "https://biztoc.com/cdn/537bd1bce1f080b3_s.webp",
    "publishedAt": "2025-05-05T16:52:57Z",
    "content": "In This Article:Key Points-The electric vehicle maker is reportedly seeing shrinking sales in another European country.-Struggles in Tesla's core EV business has dogged the stock all year.-Investors … [+135 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "247wallst.com",
    "title": "Tesla (NASDAQ: TSLA) Bull, Base, & Bear Price Prediction and Forecast",
    "description": "Shares of Tesla Inc. (NASDAQ:TSLA) may be catching the eye of investors looking for a buy-low opportunity, but if that includes you, proceed with caution. Since reaching its all-time high of $479.86 on Dec. 17, 2024, the stock has plummeted 42.18%, including …",
    "url": "https://biztoc.com/x/eeb62b39c9fb6dd0",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T16:42:04Z",
    "content": "Shares of Tesla Inc. (NASDAQ:TSLA) may be catching the eye of investors looking for a buy-low opportunity, but if that includes you, proceed with caution. Since reaching its all-time high of $479.86 … [+141 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "theweek.com",
    "title": "How could Tesla replace Elon Musk?",
    "description": "Will he stay or will he go? Tesla last week shot down a report that its board is searching for a new CEO to replace Elon Musk atop the company. But questions about the company's future are not going away.\nFinding somebody to take Musk's place is a \"huge chall…",
    "url": "https://biztoc.com/x/ad6f625c10056402",
    "urlToImage": "https://biztoc.com/cdn/ad6f625c10056402_s.webp",
    "publishedAt": "2025-05-05T16:41:49Z",
    "content": "Will he stay or will he go? Tesla last week shot down a report that its board is searching for a new CEO to replace Elon Musk atop the company. But questions about the company's future are not going … [+144 chars]"
    },
    
    {
    "source": {
    "id": null,
    "name": "The Week Magazine"
    },
    "author": "theweekonlineeditors@futurenet.com (Joel Mathis, The Week US)",
    "title": "How could Tesla replace Elon Musk?",
    "description": "CEO is 'greatest asset and gravest risk'",
    "url": "https://theweek.com/business/tesla-replace-elon-musk",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/WS8krrGpRwNPTF5VxP8sdC.jpg",
    "publishedAt": "2025-05-05T16:35:47Z",
    "content": "Will he stay or will he go? Tesla last week shot down a report that its board is searching for a new CEO to replace Elon Musk atop the company. But questions about the company's future are not going … [+3282 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "Reuters",
    "title": "S&P 500, Nasdaq slip after Trump's fresh tariffs at start of Fed-decision week",
    "description": "U.S. stocks experienced a mixed trading day as President Trump's new tariffs reignited trade war anxieties, overshadowing anticipation for the Federal Reserve's upcoming policy decision. Energy stocks declined, while financial stocks saw gains, impacting majo…",
    "url": "https://economictimes.indiatimes.com/markets/stocks/news/sp-500-nasdaq-slip-after-trumps-fresh-tariffs-at-start-of-fed-decision-week/articleshow/120905512.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-120905565,width-1200,height-630,imgsize-361188,overlay-etmarkets/articleshow.jpg",
    "publishedAt": "2025-05-05T16:20:59Z",
    "content": "The S&amp;P 500 and the Nasdaq were lower on Monday after U.S. President Donald Trump rekindled worries about the fallout of a global trade war by introducing new tariffs, while focus remained on the… [+2914 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Thegatewaypundit.com"
    },
    "author": "Margaret Flavin",
    "title": "Legal Immigrant from Africa Has Message for ‘Spoiled’ Protesting Leftists: “How can you hate one man just because he love his country?” (Video)",
    "description": "Leftists across the country, many of whom are Boomers trying to relive their \"glory days\" of the 60's, continue to protest against Donald Trump's efforts to Make America Great Again.\nThe post Legal Immigrant from Africa Has Message for ‘Spoiled’ Protesting Le…",
    "url": "https://www.thegatewaypundit.com/2025/05/legal-immigrant-africa-has-message-spoiled-protesting-leftists/",
    "urlToImage": "https://www.thegatewaypundit.com/wp-content/uploads/2025/03/tesla-protest-in-easton-columbus-ohio-by-kristinn-taylor-03222025-scaled.jpg",
    "publishedAt": "2025-05-05T16:15:33Z",
    "content": "Protesters at a Tesla dealership in the Easton shopping district in Columbus, Ohio, photo by Kristinn Taylor, March 22, 2025.\r\nLeftists across the country, many of whom are Boomers trying to relive t… [+2086 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Washingtonspectator.org"
    },
    "author": "washington spectator",
    "title": "America's Slide into Authoritarianism...",
    "description": "Historians (if they exist in the future and any records of this period survive) will note this month as one where the United States slipped fully into authoritarianism. Incompetence, luck…",
    "url": "https://washingtonspectator.org/americas-slide-into-authoritarianism-as-seen-from-ted-2025/",
    "urlToImage": "https://washingtonspectator.org/wp-content/uploads/2025/04/ted-2025-its-a-coup.jpg",
    "publishedAt": "2025-05-05T16:00:03Z",
    "content": "Historians (if they exist in the future and any records of this period survive) will note this month as one where the United States slipped fully into authoritarianism. Incompetence, luck, and real l… [+7780 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Post"
    },
    "author": "Ariel Zilber",
    "title": "Elon Musk’s security guards at ‘Fort Knox’ Texas compound called cops on neighbor they thought was naked: report",
    "description": "Musk's suburban Austin mansion is equipped with high fencing, a phalanx of armed security guards and surveillance cameras.",
    "url": "https://nypost.com/2025/05/05/business/elon-musks-security-guards-called-cops-on-neighbor-they-thought-was-naked/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2025/05/103866731.jpg?quality=75&strip=all&w=1024",
    "publishedAt": "2025-05-05T15:36:55Z",
    "content": "High fences make bad neighbors.\r\nAt least that’s what those living near Elon Musk’s “Fort Knox” high-walled compound near Austin, Texas, claim — including allegations that the mogul’s security forces… [+4330 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Electrek"
    },
    "author": "Fred Lambert",
    "title": "Waymo plans to more than double its self-driving I-PACE fleet within the next year",
    "description": "Waymo announced plans to more than double its fleet of self-driving I-PACE electric vehicles by the end of next year.\n\n\n\n more…",
    "url": "http://electrek.co/2025/05/05/waymo-plans-to-more-than-double-its-self-driving-i-pace-fleet-within-the-next-year/",
    "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2024/02/waymo-jaguar-ipace-self-driving-1.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    "publishedAt": "2025-05-05T15:32:15Z",
    "content": "Waymo announced plans to more than double its fleet of self-driving I-PACE electric vehicles by the end of next year.\r\nToday, self-driving market leader Waymo announced its manufacturing expansion pl… [+2294 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Newser"
    },
    "author": "John Johnson",
    "title": "Musk's Most Important Mission Isn't DOGE or EVs",
    "description": "Elon Musk is shifting away from DOGE to refocus on Tesla, and James Pethokoukis writes in a Washington Post essay that it can't happen soon enough. The reason is not because of politics or even electric cars. Pethokoukis, a senior fellow at the American Enter…",
    "url": "https://www.newser.com/story/368171/musks-most-important-mission-isnt-doge-or-evs.html",
    "urlToImage": "https://img1-azrcdn.newser.com/image/1608792-12-20250505104347.jpeg",
    "publishedAt": "2025-05-05T15:28:00Z",
    "content": "Elon Musk is shifting away from DOGE to refocus on Tesla, and James Pethokoukis writes in a Washington Post essay that it can't happen soon enough. The reason is not because of politics or even elect… [+1412 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Daily Caller"
    },
    "author": "Hudson Crozier",
    "title": "Prosecutor Who Let Tesla Vandal Off Easy Now Under DOJ Probe For Race-Based Policy",
    "description": "The DOJ is looking into whether a Minnesota prosecutor's office is violating the Constitution by pledging to factor defendants' skin color into plea deals.",
    "url": "https://dailycaller.com/2025/05/05/prosecutor-who-let-tesla-vandal-off-easy-now-under-doj-probe-for-race-based-policy/",
    "urlToImage": "https://cdn01.dailycaller.com/wp-content/uploads/2025/05/GettyImages-2202127606-scaled-e1746452090620.jpg",
    "publishedAt": "2025-05-05T15:25:52Z",
    "content": "The Department of Justice (DOJ) is looking into whether a Minnesota prosecutor’s office is violating the Constitution by pledging to factor defendants’ skin color into plea deals.\r\nAssistant Attorney… [+4603 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "Global Desk",
    "title": "If Elon Musk quits as CEO, Tesla's valuation could drop by a massive 25%, warns Gary Black; here's a complete breakdown of what he said",
    "description": "Gary Black, a Tesla bull, dismissed the rumour of Elon Musk's potential departure from Tesla, cautioning that such a move could plummet the stock value. Black estimates a 5%-10% drop if Musk transitions roles and a 20%-25% fall if he exits entirely. Musk hims…",
    "url": "https://economictimes.indiatimes.com/news/international/us/if-elon-musk-quits-as-ceo-teslas-valuation-could-drop-by-a-massive-25-warns-gary-black-heres-a-complete-breakdown-of-what-he-said/articleshow/120904128.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-120904226,width-1200,height-630,imgsize-26370,overlay-economictimes/articleshow.jpg",
    "publishedAt": "2025-05-05T15:17:46Z",
    "content": "After speculation swirled around the potential for Tesla CEO Elon Musk to step down and replace him, a Tesla bull Gary Black, managing partner at The Future Fund LLC, was quick to shoot down the rumo… [+2637 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Hamna Asim",
    "title": "Is Tesla, Inc. (TSLA) Among The High Growth Companies Hedge Funds Are Buying?",
    "description": "We recently published a list of 15 High Growth Companies Hedge Funds Are Buying. In this article, we are going to take a look at where Tesla, Inc...",
    "url": "https://finance.yahoo.com/news/tesla-inc-tsla-among-high-151337831.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/R3DsTXHuX1Up50du0B.awA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzM-/https://media.zenfs.com/en/insidermonkey.com/1277c6032fd09b727a10249a170024cf",
    "publishedAt": "2025-05-05T15:13:37Z",
    "content": "We recently published a list of 15 High Growth Companies Hedge Funds Are Buying. In this article, we are going to take a look at where Tesla, Inc. (NASDAQ:TSLA) stands against other high growth stock… [+5811 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "cnbc.com",
    "title": "How Tesla lost some of its biggest fans",
    "description": "Tesla owners and investors once believed the company and CEO Elon Musk were changing the world. Now many are selling their cars and dumping stock.",
    "url": "https://biztoc.com/x/73ad3323df32e282",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T15:12:49Z",
    "content": "Tesla owners and investors once believed the company and CEO Elon Musk were changing the world. Now many are selling their cars and dumping stock.\r\nThis story appeared on cnbc.com, 2025-05-05 15:08:3… [+1 chars]"
    },
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "Andrew J. Hawkins",
    "title": "Waymo says it will add 2,000 more robotaxis in 2026",
    "description": "Waymo said it recently received its last delivery of Jaguar I-Pace SUVs, which will be retrofitted with sensors and autonomous driving technology at its factory in Arizona, before joining its robotaxi fleet. In a blog post published today, the Alphabet compan…",
    "url": "https://www.theverge.com/news/661025/waymo-fleet-size-factory-arizona-jaguar-robotaxi-zeekr",
    "urlToImage": "https://platform.theverge.com/wp-content/uploads/sites/2/2025/05/Waymo_General_Assembly.webp?quality=90&strip=all&crop=0%2C3.4613147178592%2C100%2C93.077370564282&w=1200",
    "publishedAt": "2025-05-05T15:10:23Z",
    "content": "The company provides a rare glimpse into its fleet size as it gears up to introduce new vehicle models.\r\nThe company provides a rare glimpse into its fleet size as it gears up to introduce new vehicl… [+3055 chars]"
    },
    {
    "source": {
    "id": "newsweek",
    "name": "Newsweek"
    },
    "author": "James Bickerton",
    "title": "House Democrats Launch Probe into Elon Musk's 'Conflict of Interest'",
    "description": "Tesla CEO was one of Donald Trump's most influential supporters during the 2024 presidential election.",
    "url": "https://www.newsweek.com/house-democrats-launch-probe-elon-musks-conflict-interest-2068031",
    "urlToImage": "https://d.newsweek.com/en/full/2638640/elon-musk.jpg",
    "publishedAt": "2025-05-05T15:10:16Z",
    "content": "Elon Musk is the target of new conflict of interest questions from Democratic members of the House Committee on Oversight and Government Reform.\r\nSpecifically, they asked key figures in the Trump adm… [+4641 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": null,
    "title": "How Tesla lost some of its biggest fans",
    "description": "Tesla owners and investors once believed the company and CEO Elon Musk were changing the world. Now many are selling their cars and dumping stock.",
    "url": "https://www.cnbc.com/2025/05/05/how-some-of-teslas-biggest-fans-turned-against-it.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/108114305-1742584083907-108114305-17417212502025-03-11t192114z_254284279_rc26bdah68f8_rtrmadp_0_usa-trump.jpeg?v=1742584102&w=1920&h=1080",
    "publishedAt": "2025-05-05T15:08:34Z",
    "content": "Tesla owners and investors once believed the company and CEO Elon Musk were changing the world. Now many are selling their cars and dumping stock.\r\nMusk has sparked protests in front of Tesla stores … [+1296 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": null,
    "title": "Tesla Named Top U.S. Contender in AI Race",
    "description": null,
    "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_cd759e68-ce73-430c-b028-8b8bfffaf32d",
    "urlToImage": null,
    "publishedAt": "2025-05-05T15:06:33Z",
    "content": "If you click 'Accept all', we and our partners, including 240 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Freerepublic.com"
    },
    "author": "Yahoo! / The Cool Down",
    "title": "Tesla sparks firestorm after bold defense of self-driving tech: 'Car does it all for you'",
    "description": "Tesla is fighting back at criticism of its Full Self-Driving features. The EV automaker took to the social media platform X to provide a robust defense of FSD's current state and future. While few would take issue with this point, many consumers have been und…",
    "url": "https://freerepublic.com/focus/f-news/4315126/posts",
    "urlToImage": null,
    "publishedAt": "2025-05-05T14:53:13Z",
    "content": "Skip to comments.\r\nTesla sparks firestorm after bold defense of self-driving tech: 'Car does it all for you'Yahoo! / The Cool Down ^\r\n | May 2, 2025\r\n | Noah Jampol\r\nPosted on 05/05/2025 7:53:13 AM P… [+2581 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Freerepublic.com"
    },
    "author": "Yahoo! / The Cool Down",
    "title": "Tesla sparks firestorm after bold defense of self-driving tech: 'Car does it all for you'",
    "description": "Tesla is fighting back at criticism of its Full Self-Driving features. The EV automaker took to the social media platform X to provide a robust defense of FSD's current state and future. While few would take issue with this point, many consumers have been und…",
    "url": "https://freerepublic.com/focus/f-chat/4315126/posts",
    "urlToImage": null,
    "publishedAt": "2025-05-05T14:53:13Z",
    "content": "Skip to comments.\r\nTesla sparks firestorm after bold defense of self-driving tech: 'Car does it all for you'Yahoo! / The Cool Down ^\r\n | May 2, 2025\r\n | Noah Jampol\r\nPosted on 05/05/2025 7:53:13 AM P… [+6181 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Livemint"
    },
    "author": "mint",
    "title": "Ather Energy IPO: Will the slow and steady builder outperform Ola on the markets?",
    "description": "Ather Energy has had a successful IPO and is all set to list. Will the stock fall below its IPO price, a curse that has befallen many newage companies, particularly rival Ola Electric, or will it soar on the hard work put in by the founders to build a deeptec…",
    "url": "https://www.livemint.com/companies/ather-energy-ipo-ola-electric-vehicle-scooter-deeptech-ev-two-wheeler-market-startup-hero-motocorp-tarun-mehta-11746451437091.html",
    "urlToImage": "https://www.livemint.com/lm-img/img/2025/05/05/1600x900/Tarun_Mehta_Swapnil_Jain_Ather_1746454215802_1746454310716.jpg",
    "publishedAt": "2025-05-05T14:43:41Z",
    "content": "Bengaluru: Shubham Asawa, a consultant at a Bengaluru-based tech startup, initially planned to buy a conventional scooter. He was considering models such as the Suzuki Access and TVS Jupiter. Given t… [+15156 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Richmond.com"
    },
    "author": "Lee National Newsroom, The Associated Press",
    "title": "Trump discusses fighting cartels, Alcatraz and due process | Hot off the Wire podcast",
    "description": " Get the latest national, international, sports and entertainment news on our daily podcast.",
    "url": "https://richmond.com/news/nation-world/article_a085bb18-ba3d-5e47-b445-a437cf3a2e4d.html",
    "urlToImage": "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/a/08/a085bb18-ba3d-5e47-b445-a437cf3a2e4d/6818c5e7c9508.preview.jpg?crop=1765%2C927%2C0%2C123&resize=1200%2C630&order=crop%2Cresize",
    "publishedAt": "2025-05-05T14:30:00Z",
    "content": "<ul><li>On today's episode: President Donald Trump discusses discussions with Mexico over sending troops to Mexico to fight drug cartels as well as the possibility of reopening Alcatraz as a prison. … [+4671 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Roanoke Times"
    },
    "author": "Lee National Newsroom, The Associated Press",
    "title": "Trump discusses fighting cartels, Alcatraz and due process | Hot off the Wire podcast",
    "description": " Get the latest national, international, sports and entertainment news on our daily podcast.",
    "url": "https://roanoke.com/news/nation-world/article_1c1f1a09-4cc7-580b-9da1-6c349a4bc16b.html",
    "urlToImage": "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/assets/v3/editorial/1/c1/1c1f1a09-4cc7-580b-9da1-6c349a4bc16b/6818c5e7c6da4.preview.jpg?crop=1765%2C927%2C0%2C123&resize=1200%2C630&order=crop%2Cresize",
    "publishedAt": "2025-05-05T14:30:00Z",
    "content": "<ul><li>On today's episode: President Donald Trump discusses discussions with Mexico over sending troops to Mexico to fight drug cartels as well as the possibility of reopening Alcatraz as a prison. … [+4712 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investors.com",
    "title": "Dow Jones Futures Fall 270 Points On Trump Tariff News; Nvidia, Tesla Slide",
    "description": "Access to this page has been denied because we believe you are using automation tools to browse the website.\nThis may happen as a result of the following:\n- Javascript is disabled or blocked by an extension (ad blockers for example)\n- Your browser does not su…",
    "url": "https://biztoc.com/x/606f879b853ec7aa",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T14:17:09Z",
    "content": "Access to this page has been denied because we believe you are using automation tools to browse the website.This may happen as a result of the following:- Javascript is disabled or blocked by an exte… [+147 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Techreport.com"
    },
    "author": "Krishi Chowdhary",
    "title": "Huawei’s 910C AI Chips Are Ready for Mass Distribution. A Wake up Call for the US",
    "description": "Mass shipment of Huawei’s 910C GPUs is expected to start by the end of this month.\nThe 910C uses two 910B processors and is reportedly as fast as Nvidia’s H100.\nThe company is also testing its latest Ascend 910D chips.\nThe post Huawei’s 910C AI Chips Are Read…",
    "url": "https://techreport.com/news/huawei-910c-ai-chips-mass-distribution-us-wake-up-call/",
    "urlToImage": "https://techreport.com/wp-content/uploads/2025/05/huawei-910c-ai-chips-mass-distribution-us-wake-up-call-e1746453848247.jpg?_t=1746460809",
    "publishedAt": "2025-05-05T14:07:29Z",
    "content": "Key Takeaways\r\n<ul><li>Mass shipment of Huawei’s 910C GPUs is expected to start by the end of this month.</li><li>The 910C uses two 910B processors and is reportedly as fast as Nvidia’s H100.</li><li… [+4825 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Livemint"
    },
    "author": "Barrons",
    "title": "What big tech earnings taught us—and didn’t—about tariffs",
    "description": "Tesla, Alphabet, Meta Platforms, Microsoft, Amazon.com and Apple have all reported earnings over the last two weeks.",
    "url": "https://www.livemint.com/companies/company-results/what-big-tech-earnings-taught-us-and-didn-t-about-tariffs-11746453617057.html",
    "urlToImage": "https://www.livemint.com/lm-img/img/2025/05/05/1600x900/im-66838381_1746453620973_1746453951176.jpg",
    "publishedAt": "2025-05-05T14:06:11Z",
    "content": "Six of the Magnificent Seven have reported their financial results this earnings season, giving investors some much-needed insight into how the worlds largest tech companies are being impacted by tar… [+2661 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "businessinsider.com",
    "title": "Tesla faces an uphill battle as 6 major European electric vehicle markets report double-digit drops in sales",
    "description": "Protesters gather outside a Tesla dealership in Lisbon, Portugal. Tesla vehicle sales in the country declined by 33% in April from the previous year.\nPATRICIA DE MELO MOREIRA / AFP\nTesla sales fell by up to 81% in some key European EV markets in April, signal…",
    "url": "https://biztoc.com/x/387164e8013b4698",
    "urlToImage": "https://biztoc.com/cdn/387164e8013b4698_s.webp",
    "publishedAt": "2025-05-05T14:06:02Z",
    "content": "Protesters gather outside a Tesla dealership in Lisbon, Portugal. Tesla vehicle sales in the country declined by 33% in April from the previous year.PATRICIA DE MELO MOREIRA / AFPTesla sales fell by … [+151 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "techcrunch.com",
    "title": "Tesla sales continue to slump across Europe despite April EV sales swell",
    "description": "Tesla’s new car sales in Spain fell 36% in April to just 571 vehicles year-over-year, Reuters reports. That slump comes as sales of electric cars made by other brands rose in the Iberian country.\nTesla sales in Spain mirror those in Europe generally, which pl…",
    "url": "https://biztoc.com/x/6fbab59825039458",
    "urlToImage": "https://biztoc.com/cdn/6fbab59825039458_s.webp",
    "publishedAt": "2025-05-05T14:05:58Z",
    "content": "Teslas new car sales in Spain fell 36% in April to just 571 vehicles year-over-year, Reuters reports. That slump comes as sales of electric cars made by other brands rose in the Iberian country.Tesla… [+141 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Rebecca Rommen",
    "title": "Tesla faces an uphill battle as 6 major European electric vehicle markets report double-digit drops in sales",
    "description": "Tesla sales fell by up to 81% in some European EV markets in April, compared to last year. It comes as rivals are putting pressure on the company.",
    "url": "https://www.businessinsider.com/tesla-double-digit-sales-drops-in-6-european-countries-2025-5",
    "urlToImage": "https://i.insider.com/681888353fe8d3928364e630?width=1200&format=jpeg",
    "publishedAt": "2025-05-05T14:01:21Z",
    "content": "Protesters gather outside a Tesla dealership in Lisbon, Portugal. Tesla vehicle sales in the country declined by 33% in April from the previous year.PATRICIA DE MELO MOREIRA / AFP\r\n<ul><li>Tesla sale… [+3456 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Kurt Knutsson, CyberGuy Report",
    "title": "Tesla doxxing attacks wrongly target nonowners across America",
    "description": "Tech expert Kurt “CyberGuy\" Knutsson reports that Tesla owners are facing threats as hackers weaponize leaked data. Are you next?",
    "url": "https://www.foxnews.com/tech/tesla-doxxing-attacks-wrongly-target-nonowners-across-america",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2025/05/1-whos-exposing-tesla-owners-personal-info-and-could-you-be-next.jpg",
    "publishedAt": "2025-05-05T14:00:33Z",
    "content": "The recent surge of attacks on Tesla owners, dealerships and charging stations has morphed into a broader campaign of intimidation, fueled by weaponized personal data. But the fallout isn't limited t… [+7550 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GlobeNewswire"
    },
    "author": "Precedence Research",
    "title": "Robot Charging Station Market Size to Achieve USD 25.43 Mn by 2034 | Towards Automotive Research",
    "description": "According to Towards Automotive researchers, the global robot charging station market size is calculated at USD 1.02 million in 2025 and is expected to reach around USD 25.43 million by 2034, growing at a CAGR of 42.93% from 2024 to 2034. According to Towards…",
    "url": "https://www.globenewswire.com/news-release/2025/05/05/3074178/0/en/Robot-Charging-Station-Market-Size-to-Achieve-USD-25-43-Mn-by-2034-Towards-Automotive-Research.html",
    "urlToImage": "https://ml.globenewswire.com/Resource/Download/01eb1f79-0c67-420b-b423-376619f975cd",
    "publishedAt": "2025-05-05T14:00:00Z",
    "content": "Ottawa, May 05, 2025 (GLOBE NEWSWIRE) -- The global robot charging station market size was valued at USD 0.71 million in 2024 and is predicted to hit around USD 25.43 million by 2034, a study publish… [+15579 chars]"
    },
    {
    "source": {
    "id": "techcrunch",
    "name": "TechCrunch"
    },
    "author": "Rebecca Bellan",
    "title": "Tesla sales continue to slump across Europe despite April EV sales swell | TechCrunch",
    "description": "Tesla's new car sales in Spain fell 36% in April to just 571 vehicles year-over-year, Reuters reports. That slump comes as sales of electric cars made by",
    "url": "https://techcrunch.com/2025/05/05/tesla-sales-continue-to-slump-across-europe-despite-april-ev-sales-swell/",
    "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/01/Tesla-sign-Getty.jpg?resize=1200,800",
    "publishedAt": "2025-05-05T13:59:04Z",
    "content": "Tesla’s new car sales in Spain fell 36% in April to just 571 vehicles year-over-year, Reuters reports. That slump comes as sales of electric cars made by other brands rose in the Iberian country. \r\nT… [+1053 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "GlobeNewswire"
    },
    "author": "Research and Markets",
    "title": "OEMs' Modular and Common Technology Platform Research Report, 2025 - Standardized Hardware Meets Personalized Software: The New Automotive Era",
    "description": "Dublin, May 05, 2025 (GLOBE NEWSWIRE) -- The \"OEMs' Modular and Common Technology Platform Research Report, 2025\" has been added to ResearchAndMarkets.com's offering.Modular platforms and common technology platforms of OEMs are at the core of current technolo…",
    "url": "https://www.globenewswire.com/news-release/2025/05/05/3074143/28124/en/OEMs-Modular-and-Common-Technology-Platform-Research-Report-2025-Standardized-Hardware-Meets-Personalized-Software-The-New-Automotive-Era.html",
    "urlToImage": "https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7",
    "publishedAt": "2025-05-05T13:25:00Z",
    "content": "Dublin, May 05, 2025 (GLOBE NEWSWIRE) -- The \"OEMs' Modular and Common Technology Platform Research Report, 2025\" has been added to ResearchAndMarkets.com's offering.\r\nModular platforms and common te… [+8070 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "3G Capital to Buy Skechers Footwear Brand for $63 a Share",
    "description": "",
    "url": "https://biztoc.com/x/51b50711fa5134af",
    "urlToImage": "https://biztoc.com/cdn/51b50711fa5134af_s.webp",
    "publishedAt": "2025-05-05T13:22:05Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+934 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "edition.cnn.com",
    "title": "The clock is ticking down to zero, and Trump needs a trade deal — badly",
    "description": "",
    "url": "https://biztoc.com/x/8a90e859791857a4",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T13:22:00Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+897 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "barrons.com",
    "title": "Tariff News: A Trade Deal May Come This Week, Report Says",
    "description": "",
    "url": "https://biztoc.com/x/ad2ac341e53c85ea",
    "urlToImage": "https://biztoc.com/cdn/ad2ac341e53c85ea_s.webp",
    "publishedAt": "2025-05-05T13:21:56Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+892 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Weather Can Be Magnet for Conspiracy Theories and Disinformation",
    "description": "",
    "url": "https://biztoc.com/x/8bd208b8dcfd5172",
    "urlToImage": "https://biztoc.com/cdn/8bd208b8dcfd5172_s.webp",
    "publishedAt": "2025-05-05T13:21:49Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+947 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "cnbc.com",
    "title": "Skechers to be acquired by 3G Capital in take-private deal, shares soar 25%",
    "description": "",
    "url": "https://biztoc.com/x/18546eef3e553059",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T13:21:45Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+889 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Car-Loan Billionaire Hankey Lists Mansion for $43.85 Million",
    "description": "",
    "url": "https://biztoc.com/x/927377aa6992b42c",
    "urlToImage": "https://biztoc.com/cdn/927377aa6992b42c_s.webp",
    "publishedAt": "2025-05-05T13:11:01Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+937 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "ctinsider.com",
    "title": "Pratt & Whitney strike underway as machinists walk picket lines in East Hartford and Middletown",
    "description": "",
    "url": "https://biztoc.com/x/7b9512210a7493ff",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T13:10:52Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+917 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Hims Taps Amazon Veteran to Lead Operations as Company Expands",
    "description": "",
    "url": "https://biztoc.com/x/5b9f802e0e547227",
    "urlToImage": "https://biztoc.com/cdn/5b9f802e0e547227_s.webp",
    "publishedAt": "2025-05-05T13:10:47Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+933 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "scmp.com",
    "title": "Tesla pushes lidar-free self-driving system in China amid wait for Beijing’s FSD approval",
    "description": "The US carmaker said in a Weibo post that its ‘visual processing solutions’ provide safer intelligent driving in various scenarios.",
    "url": "https://biztoc.com/x/d02494f90b2a0d9b",
    "urlToImage": "https://biztoc.com/cdn/d02494f90b2a0d9b_s.webp",
    "publishedAt": "2025-05-05T13:10:39Z",
    "content": "The US carmaker said in a Weibo post that its visual processing solutions provide safer intelligent driving in various scenarios.\r\nThis story appeared on scmp.com, 2025-05-05 13:00:17."
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "barchart.com",
    "title": "KeyCorp Stock: Analyst Estimates & Ratings",
    "description": "",
    "url": "https://biztoc.com/x/b1256b3929ed8436",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T13:10:37Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+903 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "politico.com",
    "title": "Capitol agenda: Crypto chaos hits the Senate",
    "description": "",
    "url": "https://biztoc.com/x/7aae79cc0df7ff0f",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T13:00:00Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+938 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "marketwatch.com",
    "title": "Berkshire Hathaway says Buffett will remain chairman when Abel takes CEO reins",
    "description": "",
    "url": "https://biztoc.com/x/fbf495b620c2ebf4",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T13:00:00Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+910 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Saudi-Backed Port Developer Weighs South Africa Harbor Deal",
    "description": "",
    "url": "https://biztoc.com/x/bc029fcc6ea3bad4",
    "urlToImage": "https://biztoc.com/cdn/bc029fcc6ea3bad4_s.webp",
    "publishedAt": "2025-05-05T12:59:57Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+937 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Updates From Milken Institute Global Conference",
    "description": "",
    "url": "https://biztoc.com/x/70e2c15b538502f4",
    "urlToImage": "https://biztoc.com/cdn/70e2c15b538502f4_s.webp",
    "publishedAt": "2025-05-05T12:59:46Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+919 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "barrons.com",
    "title": "Tyson Foods Misses the Mark on Sales",
    "description": "",
    "url": "https://biztoc.com/x/98778333956c858d",
    "urlToImage": "https://biztoc.com/cdn/98778333956c858d_s.webp",
    "publishedAt": "2025-05-05T12:59:41Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+892 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "barchart.com",
    "title": "Hogs Shift Focus to New Week",
    "description": "",
    "url": "https://biztoc.com/x/f6f905810ca6fa49",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T12:49:07Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+892 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "barchart.com",
    "title": "Hewlett Packard Enterprise Stock: Is Wall Street Bullish or Bearish?",
    "description": "",
    "url": "https://biztoc.com/x/54d11fed30f09406",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T12:49:02Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+930 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Romanian Prime Minister to Resign After Coalition Defeat in Vote",
    "description": "",
    "url": "https://biztoc.com/x/b4a70d72ff5b6a1c",
    "urlToImage": "https://biztoc.com/cdn/b4a70d72ff5b6a1c_s.webp",
    "publishedAt": "2025-05-05T12:48:54Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+942 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Peabody Says Mine Fire Threatens to Derail Anglo Coal Takeover",
    "description": "",
    "url": "https://biztoc.com/x/df62926e19eda734",
    "urlToImage": "https://biztoc.com/cdn/df62926e19eda734_s.webp",
    "publishedAt": "2025-05-05T12:48:53Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+940 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "semafor.com",
    "title": "Trump's Gulf visit to focus on investment, weapons deals",
    "description": "",
    "url": "https://biztoc.com/x/abeb4bfbd0939c43",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T12:48:47Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+911 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "finance.yahoo.com",
    "title": "Lundin announces largest greenfield copper discovery at Filo del Sol project",
    "description": "",
    "url": "https://biztoc.com/x/3648d5f483a4b362",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T12:48:41Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+916 chars]"
    },
    {
     "source": {
    "id": null,
    "name": "Forbes"
    },
    "author": "Alan Ohnsman, Forbes Staff, \n Alan Ohnsman, Forbes Staff\n https://www.forbes.com/sites/alanohnsman/",
    "title": "Current Climate: Major Assault On California’s Environmental Rules",
    "description": "In this week's Current Climate, California's ability to set tough environmental rules is under attack; Elon Musk is out of ideas to revive Tesla; domestically sourced lithium-sulfur batteries",
    "url": "https://www.forbes.com/sites/alanohnsman/2025/05/05/current-climate-a-major-assault-on-californias-environmental-rules/",
    "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/681541b451ae5311ac7d37e4/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    "publishedAt": "2025-05-05T12:45:00Z",
    "content": "Plus: Elon Musk runs out of ideas to save Tesla; cheaper, domestically sourced lithium-sulfur batteries\r\nCurrent Climate brings you the latest news about the business of sustainability every Monday. … [+10833 chars]"
    },
    {
    "source": {
    "id": "marca",
    "name": "Marca"
    },
    "author": "ÓSCAR JIMÉNEZ, AUSTIN CALDWELL",
    "title": "Elon Musk creates his own private city in Texas, despite protests from environmental groups",
    "description": "Elon Musk, having failed to establish the first city on Mars - a plan he plans to start in 2026 - has pushed for the creation of a new private municipality in the United States, th",
    "url": "https://www.marca.com/en/lifestyle/us-news/2025/05/05/6818afbfca4741df6e8b4589.html",
    "urlToImage": "https://phantom-marca.uecdn.es/ba6e1d99eeb00d8a6f86a56b85fb172a/resize/1200/f/webp/assets/multimedia/imagenes/2025/05/05/17464486194872.jpg",
    "publishedAt": "2025-05-05T12:40:32Z",
    "content": "Elon Musk, having failed to establish the first city on Mars - a plan he plans to start in 2026 - has pushed for the creation of a new private municipality in the United States, the second of its kin… [+1523 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Trump’s Gutting of US Climate Report Prompts Science Groups to Step Up",
    "description": "",
    "url": "https://biztoc.com/x/f21b06ec5056e913",
    "urlToImage": "https://biztoc.com/cdn/f21b06ec5056e913_s.webp",
    "publishedAt": "2025-05-05T12:37:57Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+948 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Apple Plans to Sell Corporate Bonds in as Many as Four Parts",
    "description": "",
    "url": "https://biztoc.com/x/8ef903e27d8cde7b",
    "urlToImage": "https://biztoc.com/cdn/8ef903e27d8cde7b_s.webp",
    "publishedAt": "2025-05-05T12:37:55Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+938 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "barchart.com",
    "title": "Do Wall Street Analysts Like Mondelez International Stock?",
    "description": "",
    "url": "https://biztoc.com/x/b7be6d6456dbc05e",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T12:37:53Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+921 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "barchart.com",
    "title": "What Are Wall Street Analysts' Target Price for Schlumberger Stock?",
    "description": "",
    "url": "https://biztoc.com/x/ec05635735b8d347",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T12:37:42Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+929 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "barrons.com",
    "title": "Cummins Beats Earnings Estimates But Withdraws Full-Year Guidance Due to Tariffs",
    "description": "",
    "url": "https://biztoc.com/x/e102c9a63f2cb86b",
    "urlToImage": "https://biztoc.com/cdn/e102c9a63f2cb86b_s.webp",
    "publishedAt": "2025-05-05T12:37:42Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+888 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Brazil Economists Cut Interest-Rate Forecast on Eve of Policy Meeting",
    "description": "",
    "url": "https://biztoc.com/x/806fbfe20d44a8c1",
    "urlToImage": "https://biztoc.com/cdn/806fbfe20d44a8c1_s.webp",
    "publishedAt": "2025-05-05T12:37:39Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+927 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "benzinga.com",
    "title": "Elon Musk Wants His Legacy To Be Advancing Civilization, Says Without 'Truth-Seeking AI,' The Future Could Be 'Dangerous'",
    "description": "In a recent interview, Tesla CEO and billionaire Elon Musk shared what he hopes will eventually become his legacy: helping civilization progress.\nAlongside his ambitious objectives for Tesla, SpaceX, and Neuralink, Musk stressed a mounting priority: developin…",
    "url": "https://biztoc.com/x/7ae9afb85892fd77",
    "urlToImage": "https://biztoc.com/cdn/7ae9afb85892fd77_s.webp",
    "publishedAt": "2025-05-05T12:26:58Z",
    "content": "In a recent interview, Tesla CEO and billionaire Elon Musk shared what he hopes will eventually become his legacy: helping civilization progress.Alongside his ambitious objectives for Tesla, SpaceX, … [+142 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "barrons.com",
    "title": "ON Semiconductor Stock Climbs on Better-Than-Expected Earnings",
    "description": "",
    "url": "https://biztoc.com/x/c4694b3a73bcab83",
    "urlToImage": "https://biztoc.com/cdn/c4694b3a73bcab83_s.webp",
    "publishedAt": "2025-05-05T12:26:53Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+897 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "US Lawmakers Request $400 Million in Transit Aid for World Cup",
    "description": "",
    "url": "https://biztoc.com/x/8b3ce70d2a57e2e9",
    "urlToImage": "https://biztoc.com/cdn/8b3ce70d2a57e2e9_s.webp",
    "publishedAt": "2025-05-05T12:26:52Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+939 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Trump Team Set to Dissolve Reagan-Era Transnational Crime Unit",
    "description": "",
    "url": "https://biztoc.com/x/92f36ac377fe60fa",
    "urlToImage": "https://biztoc.com/cdn/92f36ac377fe60fa_s.webp",
    "publishedAt": "2025-05-05T12:26:51Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+940 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "barrons.com",
    "title": "Buffett to Remain Berkshire Hathaway Chairman After Giving Up CEO Role",
    "description": "",
    "url": "https://biztoc.com/x/e6f44f4392bc4a72",
    "urlToImage": "https://biztoc.com/cdn/e6f44f4392bc4a72_s.webp",
    "publishedAt": "2025-05-05T12:26:41Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+902 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "wired.com",
    "title": "Researchers: open source serialization tool easyjson, developed by Russia's VK Group and widely used by the US DOD and others, poses a national security risk",
    "description": "",
    "url": "https://biztoc.com/x/bce573c63f1605f3",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T12:26:40Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+879 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Afterbabel.com"
    },
    "author": "Christine Rosen",
    "title": "The Death of Daydreaming: What we lose when phones take away boredom",
    "description": "What we lose when phones take away boredom and interstitial time",
    "url": "https://www.afterbabel.com/p/on-the-death-of-daydreaming",
    "urlToImage": "https://substackcdn.com/image/fetch/w_1200,h_600,c_fill,f_jpg,q_auto:good,fl_progressive:steep,g_auto/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc045dcff-c182-4cc1-b063-23afb0578a5a_3840x2160.jpeg",
    "publishedAt": "2025-05-05T12:22:10Z",
    "content": "Intro from Jon Haidt:\r\nWhen I was nearly finished writing The Anxious Generation in the summer of 2023, I realized that I had left a gap. The book focused on the collapse of mental health, attention,… [+21697 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "barrons.com",
    "title": "Oil Prices Drop to Four-Year Low. Big Mergers Like a Shell, BP Combo Could Appeal",
    "description": "",
    "url": "https://biztoc.com/x/3976675c3baf4429",
    "urlToImage": "https://biztoc.com/cdn/3976675c3baf4429_s.webp",
    "publishedAt": "2025-05-05T12:15:53Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+897 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "finance.yahoo.com",
    "title": "Permian Resources Corporation (PR): Among the Most Undervalued Energy Stocks to Buy According to Hedge Funds",
    "description": "",
    "url": "https://biztoc.com/x/98b60300db4f7d4e",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T12:15:52Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+912 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Kosovo Premier Seeks to End Deadlock With Bid to Form Coalition",
    "description": "",
    "url": "https://biztoc.com/x/c6ffc372578772c5",
    "urlToImage": "https://biztoc.com/cdn/c6ffc372578772c5_s.webp",
    "publishedAt": "2025-05-05T12:15:51Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+941 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Saudi Firm Brings Westfield Malls to Kingdom Amid Tourism Push",
    "description": "",
    "url": "https://biztoc.com/x/21dd2ba8d81bb912",
    "urlToImage": "https://biztoc.com/cdn/21dd2ba8d81bb912_s.webp",
    "publishedAt": "2025-05-05T12:15:45Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+951 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "marketwatch.com",
    "title": "Economists foresee a U.S. recession. It might be an optimal time to buy stocks",
    "description": "",
    "url": "https://biztoc.com/x/18a8110b76d552e1",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T12:15:44Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+910 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investors.com",
    "title": "Dow Jones Futures Fall 270 Points On Trump Tariff News; Nvidia, Tesla Slide",
    "description": "Futures for the Dow Jones Industrial Average and other major stock indexes dropped Monday, as Wall Street reacted to President Donald Trump's latest tariff news. Nvidia (NVDA), Tesla (TSLA) pulled back on the stock market today following rallies in recent ses…",
    "url": "https://biztoc.com/x/37c1b29b35b24e71",
    "urlToImage": "https://biztoc.com/cdn/37c1b29b35b24e71_s.webp",
    "publishedAt": "2025-05-05T12:15:44Z",
    "content": "Futures for the Dow Jones Industrial Average and other major stock indexes dropped Monday, as Wall Street reacted to President Donald Trump's latest tariff news. Nvidia (NVDA), Tesla (TSLA) pulled ba… [+146 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "How Abu Dhabi’s $1.7 Trillion Wealth Funds Collaborate — And Compete",
    "description": "",
    "url": "https://biztoc.com/x/1b9097c18cc273a7",
    "urlToImage": "https://biztoc.com/cdn/1b9097c18cc273a7_s.webp",
    "publishedAt": "2025-05-05T12:15:41Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+953 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Securityaffairs.com"
    },
    "author": "Pierluigi Paganini",
    "title": "A hacker stole data from TeleMessage, the firm that sells modified versions of Signal to the U.S. gov",
    "description": "A hacker stole data from TeleMessage, exposing messages from its modified Signal, WhatsApp, and other apps sold to the U.S. government. A hacker stole customer data from TeleMessage, an Israeli firm selling modified versions of popular messaging apps, such as…",
    "url": "https://securityaffairs.com/177458/hacking/a-hacker-stole-data-from-telemessage-the-firm-that-sells-modified-versions-of-signal-to-the-u-s-gov.html",
    "urlToImage": "https://securityaffairs.com/wp-content/uploads/2025/05/image-10.png",
    "publishedAt": "2025-05-05T12:06:21Z",
    "content": "A hacker stole data from TeleMessage, the firm that sells modified versions of Signal to the U.S. gov\r\n | Experts shared up-to-date C2 domains and other artifacts related to recent MintsLoader attack… [+161389 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Ackman’s Pershing Square to Invest $900 Million in Howard Hughes",
    "description": "",
    "url": "https://biztoc.com/x/196947419c98aab5",
    "urlToImage": "https://biztoc.com/cdn/196947419c98aab5_s.webp",
    "publishedAt": "2025-05-05T12:04:54Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+941 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "US Border Towns Are Being Ravaged by Canada’s Furious Boycott",
    "description": "",
    "url": "https://biztoc.com/x/49065f41548f2a18",
    "urlToImage": "https://biztoc.com/cdn/49065f41548f2a18_s.webp",
    "publishedAt": "2025-05-05T12:04:51Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+931 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Berkshire’s Board Follows Buffett’s Advice, Naming Abel Next CEO",
    "description": "",
    "url": "https://biztoc.com/x/4fc3ebc5d372c591",
    "urlToImage": "https://biztoc.com/cdn/4fc3ebc5d372c591_s.webp",
    "publishedAt": "2025-05-05T12:04:50Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+941 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Warren Buffett Steps Down After Six Decades in Charge",
    "description": "",
    "url": "https://biztoc.com/x/13297240354e5ba9",
    "urlToImage": "https://biztoc.com/cdn/13297240354e5ba9_s.webp",
    "publishedAt": "2025-05-05T12:04:43Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+934 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "bloomberg.com",
    "title": "Apple Reaches Critical Juncture With Tariffs, AI and Services Turmoil",
    "description": "",
    "url": "https://biztoc.com/x/f0af8be31af540aa",
    "urlToImage": "https://biztoc.com/cdn/f0af8be31af540aa_s.webp",
    "publishedAt": "2025-05-05T12:04:41Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+965 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "edition.cnn.com",
    "title": "Federal student loans are due again. A record percentage of borrowers are seriously delinquent",
    "description": "",
    "url": "https://biztoc.com/x/0c3cd6e5a8ebddc6",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T12:04:37Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+912 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Star Online"
    },
    "author": "Friederike  Heine",
    "title": "AfD files lawsuit against German spy agency's extremist classification",
    "description": "BERLIN (Reuters) -Far-right party Alternative for Germany filed a lawsuit on Monday challenging a decision last week by Germany's domestic intelligence agency to classify the party as an extremist organisation. Read full story",
    "url": "https://www.thestar.com.my/news/world/2025/05/05/afd-files-lawsuit-against-german-spy-agency039s-extremist-classification",
    "urlToImage": "https://apicms.thestar.com.my/uploads/images/2025/05/05/3299991.jpg",
    "publishedAt": "2025-05-05T11:58:00Z",
    "content": "BERLIN (Reuters) -Far-right party Alternative for Germany filed a lawsuit on Monday challenging a decision last week by Germany's domestic intelligence agency to classify the party as an extremist or… [+2225 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "finance.yahoo.com",
    "title": "New Tesla sales in Spain drop 36% in April despite EV sales surge",
    "description": "In This Article:\n(Reuters) -Tesla's new car sales in Spain fell 36% in April from the same month in 2024 to 571 vehicles, registration data released by industry group ANFAC showed on Monday, while sales of electric cars from other brands soared.\nOver the firs…",
    "url": "https://biztoc.com/x/55fc71620b85dc33",
    "urlToImage": "https://biztoc.com/cdn/55fc71620b85dc33_s.webp",
    "publishedAt": "2025-05-05T11:53:49Z",
    "content": "In This Article:(Reuters) -Tesla's new car sales in Spain fell 36% in April from the same month in 2024 to 571 vehicles, registration data released by industry group ANFAC showed on Monday, while sal… [+149 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investors.com",
    "title": "Five China Stocks Near Buy Points Amid Trump Tariff Trade War Hopes",
    "description": "China stocks are rebounding on trade war hopes after tumbling on Trump tariffs. Alibaba and Tesla rivals are near buy points.\nThe post Five China Stocks Near Buy Points Amid Trump Tariff Trade War Hopes appeared first on Investor's Business Daily.",
    "url": "https://biztoc.com/x/0e10dabfce3f888a",
    "urlToImage": "https://biztoc.com/cdn/930/og.png",
    "publishedAt": "2025-05-05T11:53:36Z",
    "content": "China stocks are rebounding on trade war hopes after tumbling on Trump tariffs. Alibaba and Tesla rivals are near buy points.The post Five China Stocks Near Buy Points Amid Trump Tariff Trade War Hop… [+106 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Biztoc.com"
    },
    "author": "investing.com",
    "title": "Pakistan tests missile amid India standoff, Moody's warns of economic cost",
    "description": "",
    "url": "https://biztoc.com/x/20d76089097e921a",
    "urlToImage": "https://biztoc.com/cdn/20d76089097e921a_s.webp",
    "publishedAt": "2025-05-05T11:53:29Z",
    "content": "{ window.open(this.href, '_blank'); }, 200); return false;\"&gt;Why is Warren Buffett stepping down now? { window.open(this.href, '_blank'); }, 200); return false;\"&gt;How will Trump's movie tariff af… [+944 chars]"
    }
    ],        
           loading: true,
            page: 1,
            totalResults: 5
        }
        document.title = `${this.capatalizeFirstLetter(this.props.category)} - AtoZ News`
    }

    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        if(parsedData.articles === undefined || parsedData.articles === null){
            this.setState({
                loading: false
            })
        }
        else{
            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false,
            })
        }
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    // handleNextClick = async () => {
    //     await this.setState({ page: this.state.page + 1 });
    //     this.updateNews();
    // }

    // handlePreviousClick = async () => {
    //     await this.setState({ page: this.state.page - 1 });
    //     this.updateNews();
    // }

    fetchMoreData = async () => {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        if(!data.ok){
            this.setState({
                loading: false,
                totalResults: this.state.articles.length
            })
            this.props.setProgress(100);
        }
        else{
            this.props.setProgress(30);
            let parsedData = await data.json();
            this.props.setProgress(70);
            if(parsedData.articles !== undefined || parsedData.articles !== null){
                this.setState({
                    articles: this.state.articles.concat(parsedData.articles),
                    totalResults: parsedData.totalResults,
                    page:this.state.page+1,
                    // loading:true
                })
            }
            else{
                this.setState({
                    loading: false
                })
            }
            this.props.setProgress(100);
        }
    }

    render() {
        return (
            <>
                <h1 className='text-center' style={{ margin: '92px 35px 35px' }}>Top {this.capatalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className='container my-3'>
                        <div className='row'>
                            {this.state.articles.map((element,index) => {
                                return <div className="col-md-4" key={index}>
                                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publish={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick} >&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </>
        )
    }
}

export default News