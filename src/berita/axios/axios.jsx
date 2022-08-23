import React from 'react';
import axios from 'axios';


class News extends React.Component {
  state = {
    datas: [],
    isLoading: true,
    errors: null
  };

  Databerita() {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=586adbf34c9049f7a63b075fc3b1f5a7'
      )
      .then(response =>
        response.data.articles.map(
          beritadata => ({
            name: `${beritadata.source.name}`,
            title: `${beritadata.title}`,
            description: `${beritadata.description}`,
            content: `${beritadata.content}`,
            image: `${beritadata.urlToImage}`,
            create: `${beritadata.publishedAt}`
          })
         
        )
      )

      .then(datas => {
        this.setState(
          {
            datas,
            isLoading: false
          },
          console.log(datas)
        );
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }



  componentDidMount() {
    this.Databerita();
  }

  render() {
    const { isLoading, datas } = this.state;
    return (
      <React.Fragment>        
            {!isLoading ? (
              datas.map(data => {
                const {
                  name,
                  title,
                  description,
                  image,
                  content,
                  create
                } = data;

                return (
                  <div key={data.title} className='container testi'>
                  
                        <div className="col-md-4 kiri">
                            <img className='img-fluid' src={image} alt='images' />
                            <div className='content-detail'>
                            <span>{create}</span>
                            <h4 className='title'>{title}</h4>
                            <p className='desc'>{description}</p>
                            <h4 className='content-name'>{name}</h4>
                            
                            <p className='content'>{content}</p>
                           
                               
                              <button className='btn btn-info'>Read More</button>
                            
                            </div>
                        </div>
                   
                  </div>
                  
                );
              })
            ) : 
            
            (
            
            <div className="container">
                 <p className="text-center">Loading...</p>
            </div>
             
            )}
         
        
      </React.Fragment>
      
    );
  }
}

export default News;