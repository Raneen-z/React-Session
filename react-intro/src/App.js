import logo from './logo.svg';
import './App.css';
import Item from './Item'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'



function App() {

  var isBook = true;
  var items = [
    { img: img1, title: "خواطر السنين", writer: "محمد مكية" },
    { img: img2, title: "العصفورية", writer: "غازي القصيبي" },
    { img: img3, title: "ورددت الجبال الصدى", writer: "خالد حسيني" }];

  const itemsList = items.map((item, i) => {
    return <Item key={i} imgSrc={item.img} title={item.title} writer={item.writer} />
  })

  return (
    <div>

      {isBook ? <h2>قائمة الكتب</h2> : <h2>الطلبات</h2>}

      {/* <Item imgSrc={img1} title="خواطر السنين" writer="محمد مكية" />
      <Item imgSrc={img2} title="العصفورية" writer="غازي القصيبي" /> */}
      
      {itemsList}


      <div className="footer">
        <h3>@2021 | Tuwaiq Academy</h3>
      </div>

    </div>
  );
}

export default App;
