import React from 'react';
import { useForm } from 'react-hook-form';
import { ImageUrl } from '../../constants/ImageUrl';
// import { Timeline } from 'primereact/timeline';
        


function ResigtrationPage() {
  const form = useForm()
  const events = [
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
];
  
  return (
    <div>
      <div className="left-section">
      <div className="card">
            {/* <Timeline value={events} content={(item) => item.status} /> */}
        </div>
      </div>
      <div className="right-section"></div>
    </div>
  )
}

export default ResigtrationPage
