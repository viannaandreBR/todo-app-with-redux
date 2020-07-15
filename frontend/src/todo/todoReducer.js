const INITIAL_STATE = {
  description: 'Ler Livro',
  list: [{
    _id: 1,
    description: 'Pagar fatura do cartão',
    done: true
  },{
    _id: 2,
    description: 'Reunião com a equipe às 10:00',
    done: false
  },{
    _id: 3,
    description: 'Consulta Médica na terça depois do Almoço',
    done: false
  }]
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'DESCRIPTION_CHANGED': 
      return { ...state, description: action.payload }
    default:
      return state
  }
}