import React from "react";


const RedesItem = ({ href, children }) => {
    return (
        <a className='redesItem' target='_blank' rel='noreferrer' href={href}>
            {children}
        </a>
    );
};

const Redes = () => {
    return (
        <>
            <RedesItem href="https://api.whatsapp.com/send?phone=541123958749"> WhatsApp   </RedesItem>
            <RedesItem href='https://www.instagram.com/ramoniralaa'> Instagram   </RedesItem>
            <RedesItem href='mailto:ramonirala@outlook.com'> E-mail   </RedesItem>
        </>
    );
};


export default Redes;