import Header from './Header';
import BookCard from './BookCard';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <BookCard title="Book Title 1" author="Author 1" price="$10.99" />
          <BookCard title="Book Title 2" author="Author 2" price="$12.99" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;