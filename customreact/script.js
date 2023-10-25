

// function customrender(element,container) {

//     const domelement = document.createElement(element.type);
//     domelement.innerHTML = element.children
//     domelement.setAttribute('href',element.props.href) 
//     domelement.setAttribute('target',element.props.target) 
    

//     container.appendChild(domelement)
// }



// with for in loop 

function customrender(element,container) {

        const domelement = document.createElement(element.type);
        domelement.innerHTML = element.children


        for (const prop in element.props) {
          
            domelement.setAttribute(prop,element.props[prop])

        }

        container.appendChild(domelement);

}



const reactelement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'working coustom react '
}

const maincontainer = document.querySelector("#root");

customrender(reactelement,maincontainer)



















