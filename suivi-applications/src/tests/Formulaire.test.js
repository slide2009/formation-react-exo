import { render, screen } from '@testing-library/react';
import Formulaire from '../components/Formulaire';
// mocker le composant Link inclus dans Formulaire
jest.mock('react-router-dom', () => ({
	Link: 'div',
}))

describe('Tests des composants du domaine ', () => {
	test('Affichage du formulaire', () => {
		render(<Formulaire/>)
		expect(screen.getByText("Retour vers le tableau")).toBeInTheDocument()
	})
})