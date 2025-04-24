import './Header.css'

export const Header = () => {
  return (
    <header className="header">
        <h1 className='title'>PRODUCTOS</h1>
        <input type='text' placeholder='Buscar por nombre...' className='input' />
    </header>
  )
}
