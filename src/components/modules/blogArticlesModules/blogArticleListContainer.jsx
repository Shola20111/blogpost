import './blogArticleListContainer.css'
import ArticleCard from './articleCard'
import Card1 from '../../../assets/card1.png'
import Card2 from '../../../assets/card2.png'
import Card3 from '../../../assets/card3.png'
import Card4 from '../../../assets/card4.png'
import Card5 from '../../../assets/card5.png'
import Card6 from '../../../assets/card6.png'
import Card7 from '../../../assets/card7.png'
import Card8 from '../../../assets/card8.png'
import Card9 from '../../../assets/card9.png'
import Card10 from '../../../assets/card10.png'
import Card11 from '../../../assets/card11.png'
import Card12 from '../../../assets/card12.png'

const data = [
  {imgUrl: Card1, text: 'Here are some things you should know regarding how we work'},
  {imgUrl: Card2, text: 'Granny gives everyone the finger, and other tips from OFFF Barcelona'},
  {imgUrl: Card3, text: 'Hello world, or, in other words, why this blog exists'},
  {imgUrl: Card4, text: 'Here are some things you should know regarding how we work'},
  {imgUrl: Card5, text: 'Connecting artificial intelligence with digital product design'},
  {imgUrl: Card6, text: 'Here are some things you should know regarding how we work'},
  {imgUrl: Card7, text: 'I believe learning is the most important skill'},
   {imgUrl: Card8, text: 'I believe learning is the most important skill'},
  {imgUrl: Card9, text: 'Clients are part of the team'},
  {imgUrl: Card10, text: 'Here are some things you should know regarding how we work'},
  {imgUrl: Card11, text: 'Connecting artificial intelligence with digital product design'},
  {imgUrl: Card12, text: 'How modern remote working tools get along with Old School Cowboy\'s methods'}
]

const BlogArticleListCntainer = () => {
  return (
    <div className='article-container'>
        <h1>All articles</h1>
        <section className='article-card-container'>
         {data.map((item, index) => (
          <ArticleCard
          key = {index}
          imgUrl={item.imgUrl}
          text={item.text}
          />
          ))
         }
          

        </section>
    </div> 
  )
}

export default BlogArticleListCntainer