import React from "react";
import { LinkArea, LinkIcon } from "./styled"
import { useHistory, useLocation } from "react-router-dom";

export default ({link, icon, tooltipe}) => {
    const history = useHistory();
    const location = useLocation();
    
    let isActive = location.pathname == link;

    const handleLinkClick = (e) => {
        e.preventDefault();
        history.push(link);
    }

    return (
        <LinkArea data-tip={tooltipe} data-for="tip-right" active={isActive} href={link} onClick={handleLinkClick}>
            <LinkIcon src={icon}/>
        </LinkArea>        
    );
}