import React from 'react'
import styles from "./index.module.css"
import Image from 'next/image'

const Alert: React.FC<{description: string}> = ({description}) => {
  return (
    <div className={styles.container}>
      <Image
        src={"/notification.svg"}
        alt="notification"
        width={40}
        height={40}
      />
      <div>
        <p style={{fontWeight: "500", margin: 0, fontSize: "15px", marginBottom: "2px"}}>Spending Alert</p>
        <p style={{ color: "#999999", margin: 0, fontSize: "10px" }}>
         {description}
        </p>
      </div>
    </div>
  );
}

export default Alert