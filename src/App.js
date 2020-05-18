import React from 'react';
import './App.css'

class App extends React.Component{


constructor(props){

  super(props)

   this.state={}
   this.quebraBis=this.quebraBis.bind(this)
   this.state={
     Frase:''
   }
   this.frases=[
      'A vida trará coisas boas se tiveres paciência.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
'Gente todo dia arruma os cabelos, por que não o coração?',
'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
'A juventude não é uma época da vida, é um estado de espírito.',
'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
'Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.',
'Siga os bons e aprenda com eles.',
'Não importa o tamanho da montanha, ela não pode tapar o sol.',
'O bom-senso vai mais longe do que muito conhecimento.',
'Quem quer colher rosas deve suportar os espinhos.',
'São os nossos amigos que nos ensinam as mais valiosas lições.'
   ]
}

quebraBis(){
 let state=this.state
 let aleatorio=Math.floor(Math.random()*this.frases.length)
 state.Frase=this.frases[aleatorio]
 this.setState(state)
}



  render(){

     return(

          <div className="container">
          
          <img src={ require('./assets/images.jpeg')  } alt="imagem" className="img"/>
          <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBis}/>

          <h3 className="textoFrase">{this.state.Frase}</h3>
          
          </div>
     )
  }



}

class Botao extends React.Component{


  render(){

    return <button onClick={this.props.acaoBtn} className="btn">{this.props.nome}</button>
  }

}


export default App;