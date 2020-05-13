import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state = {videos: [], videoSelecionado : null};
   
    componentDidMount(){
        this.onSearchBarSubmit('funny dogs');
    }
   
    onSearchBarSubmit = async (termo) => {
        try{
            const resposta = await youtube.get('/search',{
                params:{
                    q: termo
                }
            });
            this.setState({
                videos: resposta.data.items,
                videoSelecionado: resposta.data.items[0]
            });
            console.log(this.state.videos);
        }catch(err){
            console.log(err)
        }
        
    };

    onVideoSelect = (video) =>{
        this.setState({videoSelecionado: video})
    }

    render(){
        return(
        <div className ="ui container">
            <SearchBar onSubmit = {this.onSearchBarSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.videoSelecionado}/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={this.onVideoSelect} videos = {this.state.videos}/>
                    </div>    
                </div>    
            </div>
        </div>
        );
    }
}

export default App;