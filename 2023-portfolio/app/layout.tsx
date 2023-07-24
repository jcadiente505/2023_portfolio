import { Montserrat } from "next/font/google";
import { Navigation } from "./ui/Navigation";
import { routes } from "./routes/routes";
import styles from "./app.module.scss";
import { montserrat } from "./assets/fonts/fonts";

export const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en" className={montserrat.className}>
      <body className={styles.body}>
        <header className={styles.mainHeader}>
          <Navigation navLinks={routes} />
        </header>

        <div className={styles.mainContent} id="content">
          <main className={styles.pageContainer}>{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;