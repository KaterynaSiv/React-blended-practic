import BlogCard from './components/BlogCard/BlogCard';
import Container from './components/Container/Container';
import CryptoHistory from './components/CryptoHistory/CryptoHistory';
import ForbesList from './components/ForbesList/ForbesList';
import Heading from './components/Heading/Heading';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import article from './data/article.json';
import statsData from './data/stats.json';
import forbesData from './data/forbes.json';
import transactionList from './data/transactions.json';

export default function App() {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard userData={article} />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" stats={statsData} />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList list={forbesData} />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory items={transactionList} />
      </Container>
    </Section>
  );
}
