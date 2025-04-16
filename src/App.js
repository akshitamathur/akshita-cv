import './css/App.css';
import {Container, Row, Col} from 'react-bootstrap';
import data from './json/data.json';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col className="App-introtile tile-dark" md={{ span: 8, offset: 4 }}>
              <center><h1>{data.basics.name}</h1>
              <h3>Web Developer, Toronto, Ontario</h3></center>
              <p>{data.basics.summary}</p>
            </Col>
          </Row>
        </Container>
       
        
       <p>This is an example of what the text will look like.</p>
       <h2>This is an example of the title.</h2>
       {2+2}
        
      </header>
    </div>
  );
}

export default App;
