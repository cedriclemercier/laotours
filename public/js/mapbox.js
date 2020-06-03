/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiY2VkcmljbGVtZXJjaWVyIiwiYSI6ImNrYWYxc205YzBiMTcydG12N214cmU1bWMifQ.YGqGj3nSIlRD0aMhuBGx3g';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/cedriclemercier/ckaf2hxg420791io6440m3sfa',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Add a Marker
    const el = document.createElement('div');
    el.className = 'marker';

    //   Add Marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extends the map bounds to include all locations
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
