function changeTab(Number) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.style.display = 'none';
            });

            // Show the selected tab content
            document.getElementById(`tab${Number}`).style.display = 'block';
        }

  //Nav bar
const openNav = () => document.querySelector('#navcontent').style.display = 'block';
const closeNav = () => document.querySelector('#navcontent').style.display = 'none';
    
//Aos initialization 
AOS.init({
    offset: 250,
    duration: 1500,
  });
  