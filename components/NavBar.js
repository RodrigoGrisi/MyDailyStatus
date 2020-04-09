import React from 'react';
import Link from 'next/link'

const NavLink = ({ href, children }) => {
  return (
    <Link href={href} className="py-4">
      <a className="p-2 hover:underline hover:text-red-800">{children}</a>
    </Link>
  )
};

const NavBar = () => {
  return (
    <div className="bg-gray-500 py-4 text-center">
      <NavLink href="/Sobre">Sobre</NavLink>
      <NavLink href="/Cadastro">Cadastro</NavLink>
      <NavLink href="/Entrar">Entrar</NavLink>
    </div>
  )
};

export default NavBar; 