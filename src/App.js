

import Accordion from "./components/Accordion";


function App() {
    const items = [
        {
            id: '12345',
            label: 'Can I use React in my projects?',
            content: "Yes you can. The majority of websites aren’t, and don’t need to be, single-page apps. With a few lines of code and no build tooling, try React in a small part of your website. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets."

        },
        {
            id: '54321',
            label: 'Can I use JavaScript in my projects?',
            content: 'Yes you can. JavaScript is a programming language mostly used client-side to make webpages interactive. You can create amazing webpages without JavaScript, but JavaScript opens up a whole new level of possibilities.'
        },
        {
            id: '15423',
            label: 'Can I use CSS in my projects?',
            content: 'Yes you can. With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!'
        },
    ]


    return (
        <Accordion items={items} />

    );
}


export default App;