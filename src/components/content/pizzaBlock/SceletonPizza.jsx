import React from "react"
import ContentLoader from "react-content-loader"

const PizzaLoader = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="138" cy="112" r="114" />
        <rect x="2" y="237" rx="15" ry="15" width="280" height="33" />
        <rect x="5" y="282" rx="15" ry="15" width="280" height="91" />
        <rect x="9" y="395" rx="15" ry="15" width="134" height="31" />
        <rect x="161" y="395" rx="15" ry="15" width="114" height="31" />
    </ContentLoader>
)

export default PizzaLoader