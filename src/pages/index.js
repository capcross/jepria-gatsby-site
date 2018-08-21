import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h3 style={{ color: "#003030", marginBottom: "0.6rem" }}>Приложения и сервисы</h3>
    <a href="http://jepria.org/JepRiaShowcase/JepRiaShowcase.jsp?em=Feature#sh:sm=Feature&ws=sh" target="_blank">Feature</a>
    <br/>
    <a href="http://jepria.org/Navigation/#sh:sm=Navigation&ws=sh" target="_blank">Navigation</a>
    <br/>
    <a href="http://jepria.org/OperatorSelfServiceJro/RequestChangePassword.jsp?em=RequestChangePassword#sh:sm=RequestChangePassword&ws=sh" target="_blank">Сброс пароля</a>
    <br/>
    <p/>
    <h3 style={{ color: "#003030", marginBottom: "0.6rem" }}>SourceForge</h3>
    <a href="https://sourceforge.net/projects/javaenterpriseplatform/" target="_blank">JEP</a>
    <br/>
    <a href="https://sourceforge.net/projects/javaenterpriseplatform/" target="_blank">Oramake Framework</a>
    <p/>
    <h3  style={{ color: "#003030", marginBottom: "0.6rem" }}>Документация</h3>
    <a href="http://jepria.org/docs/javaenterpriseplatform/git/Module/JepRia/Doc/App/AutoGen/index.html" target="_blank">JepRia</a>
    <br/>
    <a href="http://jepria.org/docs/javaenterpriseplatform/git/Module/JepRiaToolkit/Doc/App/AutoGen/index.html" target="_blank">JepRiaToolkit</a>
    <br/>
    <a href="http://jepria.org/docs/javaenterpriseplatform/git/Module/JepRiaReport/Doc/App/AutoGen/index.html" target="_blank">JepRiaReport</a>
    <br/>...В работе...
  </div>
)

export default IndexPage
