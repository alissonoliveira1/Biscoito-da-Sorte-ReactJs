import index from "./index.css";
import React, { Component } from "react";
import Feed from "./components/feed/feed.js";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textofrase:''
    };
      this.quebrabiscoito = this.quebrabiscoito.bind(this)
      this.frase=[
        'Grandes realizações começam com pequenos passos',
        'a sorte favorece aqueles que acreditam em si mesmos',
         'seja a luz que guia os outros em tempos de escuridão',
          'a paciência é a chave que abre todas as portas do sucesso',
           'o amor é a essência que dá significado à vida',
            'acredite na magia que reside dentro de você',
             'o sorriso é o idioma universal da felicidade',
              'a gratidão transforma o que temos em suficiente',
               'a vida é uma jornada; aproveite cada passo do caminho',
                'a sabedoria está em aprender com cada experiência',
                 'seja a mudança que você deseja ver no mundo',
                  'a persistência supera qualquer desafio',
                   'a amizade é um tesouro que enriquece a alma',
                    'a harmonia começa dentro de si mesmo',
                     'cada dia é uma nova oportunidade para brilhar',
                      'o sucesso é a soma de pequenos esforços repetidos diariamente',
                       'o otimismo é a chave para abrir portas inexploradas',
                        'a generosidade cria um ciclo de bondade interminável',
                         'o respeito é a base de relacionamentos duradouros',
                          'o equilíbrio é a chave para uma vida plena',
                          'A jornada mais longa começa com um único passo.',
                          'Seja a mudança que você quer ver no mundo.',
                          'O sucesso é a soma de pequenos esforços repetidos.',
                          'Acredite em si mesmo e tudo é possível.',
                          'A paciência é amarga, mas seus frutos são doces.',
                          'Quanto mais você aprende, mais percebe o quanto falta aprender.',
                          'A sorte favorece a mente preparada.',
                          'O futuro pertence àqueles que acreditam na beleza de seus sonhos.',
                          'A vida é feita de escolhas, faça as melhores.',
                          'Siga seu coração, mas leve seu cérebro com você.']
    
  }
quebrabiscoito(){
let state = this.state
let numaleatorio = Math.floor(Math.random() * this.frase.length)
state.textofrase = this.frase[numaleatorio]
this.setState(state)
}
  render() {
    return (
    <div className="container">
    <img src={require('./components/pngwing.com.png')} className="imgsorte"/>
    <Botao nome='Abrir biscoito' acaobnt={this.quebrabiscoito}/>
    <h2 className="frasesorte">{this.state.textofrase}</h2>
    </div>
    );
  }
  
}
class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaobnt} className="botao">{this.props.nome}</button >
      </div>
    )
  }
}
export default App;
