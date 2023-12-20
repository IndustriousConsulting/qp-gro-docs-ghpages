"use strict";(self.webpackChunkubc_services=self.webpackChunkubc_services||[]).push([[441],{1045:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=i(5893),a=i(1151);const s={},o="CDS View Generation (GDD)",r={id:"GDD/documentation",title:"CDS View Generation (GDD)",description:"Intro",source:"@site/docs/GDD/documentation.md",sourceDirName:"GDD",slug:"/GDD/documentation",permalink:"/qp-gro-docs-ghpages/GDD/documentation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"ubcSidebar",previous:{title:"Overview",permalink:"/qp-gro-docs-ghpages/"},next:{title:"Data Element Generation (GDE)",permalink:"/qp-gro-docs-ghpages/GDE/documentation"}},d={},c=[{value:"Intro",id:"intro",level:2},{value:"Technical Overview",id:"technical-overview",level:2}];function l(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"cds-view-generation-gdd",children:"CDS View Generation (GDD)"}),"\n",(0,t.jsx)(n.h2,{id:"intro",children:"Intro"}),"\n",(0,t.jsx)(n.p,{children:"Creating and utilizing Core Data Services (CDS) Views for generating a customer's data model within the SAP system is crucial for achieving a highly efficient and adaptable landscape. The importance of this process cannot be overstated, as it brings together flexible data modeling through qppd customizing with the establishment of a robust data model and business layer."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Flexibility in Data Modeling via qppd Customizing",(0,t.jsx)(n.br,{}),"\n","qppd customizing provides a powerful and flexible environment for data modeling. This allows for tailoring data structures to the specific needs of the organization, ensuring that the data model accurately reflects the business requirements. The customizing stays as flexible as it is, without any limitations modelling your objects."]}),"\n",(0,t.jsxs)(n.li,{children:["Establishment of a Data Model/Business Layer",(0,t.jsx)(n.br,{}),"\n","The creation of a comprehensive data model and business layer is the foundation for building a unified and coherent system. This layer acts as the cornerstone for various applications and functionalities within the SAP ecosystem. Let's have a famous example: Just like standard SAP's view ",(0,t.jsx)(n.code,{children:"I_Product"})," you can establish a view to your newly created object modelled and maintained in qppd."]}),"\n",(0,t.jsxs)(n.li,{children:["Typed APIs",(0,t.jsx)(n.br,{}),"\n","CDS Views provide the basis for creating Typed APIs, ensuring a standardized and strongly typed interface for communication between different applications and services. This results in enhanced reliability, maintainability, and ease of integration."]}),"\n",(0,t.jsxs)(n.li,{children:["Critical for UI5 Apps Development",(0,t.jsx)(n.br,{}),"\n","CDS Views are essential for developing SAP UI5 applications. It provides a standardized and consistent data structure, enabling seamless integration between the frontend and backend. This ensures a superior user experience and facilitates efficient application development. CDS Views and, more concrete, generated Interface Views for your qppd objects lays the foundation for an efficient App development."]}),"\n",(0,t.jsxs)(n.li,{children:["Data Querying and Analytics",(0,t.jsx)(n.br,{}),"\n",'CDS Views enable efficient and optimized data querying and analysis. Users can extract relevant information easily, build, their own Queries and even make use of SAPs standard Data extraction for BI/SAC/... "CDS based data extraction". No more custom code to have your qppd data in Analytics tools! All this leads to improved decision-making processes and enhanced analytical capabilities.']}),"\n",(0,t.jsxs)(n.li,{children:["State-of-the-Art Integration within SAP",(0,t.jsx)(n.br,{}),"\n","Leveraging CDS Views aligns with the state-of-the-art practices within SAP. It ensures that the customer's data model in qppd is in sync with the latest advancements in technology, making it future-proof and compatible with evolving SAP standards."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"In conclusion, the generation of CDS Views for building a customer's data model based on qppd specifications is not just a best practice; it is a strategic imperative. It empowers organizations to harness the full potential of qppd by providing a solid foundation for application development, data analysis, and seamless integration. The adaptability and efficiency gained through this approach are essential for staying competitive and agile in today's dynamic business environment."})}),"\n",(0,t.jsx)(n.h2,{id:"technical-overview",children:"Technical Overview"}),"\n",(0,t.jsxs)(n.p,{children:["CDS Views for QPPD Specifications gets administrated in our very own Workbench called ",(0,t.jsx)(n.code,{children:"/MXP/QP_GDD"}),' (transaction).\nThe generated CDS Views are expected to be "generated only" and act as the very first foundation layer (Interface View) in your system representing the QPPD object. No extensions are allowed directly. Instead, make use of View extensions to model your custom relations like "Association from your Demand Specification to Sales Order Item".\nYou are free to use this first layer in every application you need, the best practice is to just wrap it in more layers dedicated to your use case "consumption layer".\nConsider reading the following link for an introduction into ',(0,t.jsx)(n.a,{href:"https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/ee6ff9b281d8448f96b4fe6c89f2bdc8/0a875bc7a005465aad92c08becc11776.html?locale=en-US",children:"CDS VDM Layers"}),'. The generated views are of category "interface" and therefore should be prefixed with ',(0,t.jsx)(n.code,{children:"I_"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"success",children:(0,t.jsx)(n.p,{children:"Model once, use it anywhere."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example use case"})}),"\n",(0,t.jsx)(n.mermaid,{value:"%%{init: {'theme':'neutral'}}%%\nerDiagram\n    DS[DemandSpecification]\n    DSI[Schedule]\n    DST[Testing]\n    DSE[Extension]\n    SOI[SalesOrderItem]\n    SO[SalesOrder]\n    CSV[ConsumptionView]\n\n    DS ||--o{ DSI : has\n    DS ||--o{ DST : has\n    DS ||--|| DSE : adds\n    DS ||--|| SOI : has\n    SOI }|--|| SO : has\n    CSV o{--o{ DS : uses"}),"\n",(0,t.jsx)(n.p,{children:"Explanation:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"DemandSpecification"})," is the root CDS View ",(0,t.jsx)(n.strong,{children:"generated"})," for a Specification Type in QPPD, here: ",(0,t.jsx)(n.code,{children:"DemandSpecification"})," linked to the SAP standard ",(0,t.jsx)(n.code,{children:"SalesOrderItem"})]}),"\n",(0,t.jsxs)(n.li,{children:["In QPPD, for ",(0,t.jsx)(n.code,{children:"DemandSpecification"})," there are modelled childs ",(0,t.jsx)(n.code,{children:"Testing"})," and ",(0,t.jsx)(n.code,{children:"Schedule"})," ",(0,t.jsx)(n.strong,{children:"generated"})," for a ",(0,t.jsx)(n.code,{children:"DemandSpecification"}),". The generated root view also has associations to the generated views ",(0,t.jsx)(n.code,{children:"Testing"})," and ",(0,t.jsx)(n.code,{children:"Schedule"})," which makes it very easy to consume that later."]}),"\n",(0,t.jsxs)(n.li,{children:["Optionally, you can also add some custom logic/expressions and/or associations to the generated views ",(0,t.jsx)(n.code,{children:"DemandSpecification"}),", ",(0,t.jsx)(n.code,{children:"Schedule"})," or ",(0,t.jsx)(n.code,{children:"Testing"})," through View Extension. Here: adding an extension view for ",(0,t.jsx)(n.code,{children:"DemandSpecification"})," adding an association to ",(0,t.jsx)(n.code,{children:"SalesOrderItem"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["You can then consume ",(0,t.jsx)(n.code,{children:"DemandSpecification"})," in your custom consumption view just reusing the fields and modelled associations having access to all the involved objects."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Never change the generated views manually, as they may be overwritten with a new generation. Always add custom fields/assocations with View Extensions."})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);