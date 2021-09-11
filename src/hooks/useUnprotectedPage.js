import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
// import { goToRecipesList } from '../routes/coordinator'

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      console.log ('Vá para a página')
      // goToRecipesList(history)
    }
  }, [history])
}

export default useUnprotectedPage
