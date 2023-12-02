import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow } from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://soccer.bsite.net/soccer-stats-controller/general/0');
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Statistiques generales</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>Equipe</IonCol>
            <IonCol>Competition</IonCol>
            <IonCol>Buts</IonCol>
            <IonCol>Tirs pm</IonCol>
            <IonCol>Discipline</IonCol>
            <IonCol>Possession %</IonCol>
            <IonCol>Passes réussies %</IonCol>
            <IonCol>Aeriens gagnes</IonCol>
            <IonCol>Note</IonCol>
          </IonRow>
          
          {/* Use map to iterate through the data and create rows */}
          {data.map((item, index) => (
            <IonRow key={index}>
              <IonCol>{item._equipeNom}</IonCol>
              <IonCol>{item._competitionNom}</IonCol>
              <IonCol>{item._buts}</IonCol>
              <IonCol>{item._tirsPm}</IonCol>
              <IonCol>{item._cartonJaune} {item._cartonRouge}</IonCol>
              <IonCol>{item._possession}</IonCol>
              <IonCol>{item._passesReussies}</IonCol>
              <IonCol>{item._aeriensGagnes}</IonCol>
              <IonCol>{item._note}</IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
