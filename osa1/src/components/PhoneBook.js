import React from 'react'
import Contact from './Contact'

const PhoneBook = ({ contacts }) => {

    const contactsToShow = contacts.length > 0 ?
        <table>
            <tbody>
                {contacts.map(contact =>
                    <Contact
                        key={contact.name + contact.number}
                        contact={contact} />)}
            </tbody>
        </table>
        :
        'Ei yhtään yhteystietoa'

    return contactsToShow
}

export default PhoneBook