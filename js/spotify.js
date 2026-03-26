/**
 * spotify.js
 * Handles fetching and rendering Spotify playlist data.
 *
 * Comentarios de ubicación:
 * - CONFIG SPOTIFY (client_id/client_secret): en servidor o variables seguras (no en frontend) si usas token de autorización.
 * - ENDPOINT API: aquí debajo, reemplaza 'https://api.spotify.com/v1/me/playlists' con tu endpoint.
 * - TOKEN: actualizar la constante o pasar por backend para mayor seguridad.
 */

document.addEventListener('DOMContentLoaded', () => {
    const playlistContainer = document.getElementById('playlist-container');
    const countLabel = document.getElementById('playlist-count');

    if (!playlistContainer) return;

    // ========================================
    // 1) Ruta de la API Spotify / fallback
    // ========================================
    const spotifyApiEndpoint = 'https://api.spotify.com/v1/me/playlists'; // <- AQUI: endpoint Spotify

    // ========================================
    // 2) Token de acceso (debe generarse en backend)
    // ========================================
    const spotifyAccessToken = 'REEMPLAZA_POR_TU_TOKEN'; // <- AQUI: token a inyectar (o usar fetch a tu backend MID)

    // Opción temporal: si no hay token, usar local JSON como fallback
    const useFallback = !spotifyAccessToken || spotifyAccessToken === 'REEMPLAZA_POR_TU_TOKEN';

    if (useFallback) {
        // Fallback local
        fetch('data/playlist.json')
            .then(response => response.json())
            .then(data => renderPlaylists(data.playlists))
            .catch(err => mostrarError(err));

    } else {
        // Llamada a API de Spotify
        fetch(spotifyApiEndpoint, {
            headers: {
                'Authorization': `Bearer ${spotifyAccessToken}`,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) throw new Error(`Spotify API error: ${response.status}`);
            return response.json();
        })
        .then(data => {
            // AQUI: extrae playlists de la respuesta de Spotify
            const playlists = (data.items || []).map(item => ({
                name: item.name,
                description: item.description || 'Sin descripción',
                spotify_url: item.external_urls?.spotify || '#',
                image: item.images?.[0]?.url || 'assets/gif/character_placeholder.gif'
            }));
            renderPlaylists(playlists);
        })
        .catch(err => {
            console.error('Error Spotify API:', err);
            // En caso de error, fallback local:
            fetch('data/playlist.json')
                .then(response => response.json())
                .then(data => renderPlaylists(data.playlists))
                .catch(err2 => mostrarError(err2));
        });
    }

    function mostrarError(err) {
        console.error('Error loading playlists:', err);
        playlistContainer.innerHTML = '<div class="error">Error al cargar playlists.</div>';
    }

    // ========================================
    // 3) Renderizado
    // ========================================
    function renderPlaylists(playlists) {
        if (!playlists || playlists.length === 0) {
            playlistContainer.innerHTML = '<div>No hay playlists disponibles.</div>';
            if (countLabel) countLabel.textContent = 'Playlists: 0';
            return;
        }

        if (countLabel) {
            countLabel.textContent = `Playlists: ${playlists.length}`;
        }

        playlistContainer.innerHTML = playlists.map(pl => `
            <a href="${pl.spotify_url}" target="_blank" class="playlist-item">
                <img src="${pl.image}" alt="${pl.name}" class="playlist-cover" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect width=%22100%22 height=%22100%22 fill=%22%23222%22/%3E%3Ctext y=%2250%22 x=%2210%22 font-size=%2212%22 fill=%22%2355ff55%22%3ENo Cover%3C/text%3E%3C/svg%3E'">
                <div class="playlist-info">
                    <span class="playlist-name">${pl.name}</span>
                    <p class="playlist-desc">${pl.description}</p>
                </div>
            </a>
        `).join('');
    }
});
