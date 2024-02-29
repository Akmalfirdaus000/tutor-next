import Navbar from "@/components/layout/navbar/page";
import { Context } from "mocha";

describe('template spec', () => {
    it('check menu navbar', () => {
      cy.visit('http://localhost:3000')
      cy.get('[data-cy = "menu-navbar"]').eq(0)
  
    })
     
    it('check link di menu navbar', () => {
      cy.visit('http://localhost:3000')
      cy.get('[data-cy = "menu-navbar"]').eq(1).should('have.attr', 'href', '/produk')
  
    })
     
  }) 
