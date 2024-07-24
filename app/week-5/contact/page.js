import ContactList from "./contact-list";


export default function ContactPage (){
    return(
        <main className = "bg-sky-100 p-10">
            <h1 className = "text-4x1 mb-S"> Contact List</h1>
            <ContactList />
        </main>
    );
}