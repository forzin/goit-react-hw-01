import styles from './TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
    return (
        <table className={styles.table}>
           <thead>
               <tr className={styles.listTitle}>
                   <th className={styles.tableTitle}>Type</th>
                   <th className={styles.tableTitle}>Amount</th>
                   <th className={styles.tableTitle}>Currency</th>
               </tr>
           </thead>

           <tbody className={styles.listTable}>
                {items.map(item => {
                    return (
                        <tr className={styles.tableTr} key={item.id}>
                          <td className={styles.tableItem}>{item.type}</td>
                          <td className={styles.tableItem}>{item.amount}</td>
                          <td className={styles.tableItem}>{item.currency}</td>
                        </tr>
                    )
                })}
               
           </tbody>
       </table>
    )
}

export default TransactionHistory;