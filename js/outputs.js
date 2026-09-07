// Load and display outputs
class OutputManager {
    constructor() {
        this.outputs = [];
    }

    async loadOutputs() {
        try {
            const response = await fetch('data/outputs.json');
            this.outputs = await response.json();
            // Sort by date descending
            this.outputs.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB - dateA;
            });
        } catch (error) {
            console.error('Error loading outputs:', error);
        }
    }

    filterByPerson(personName) {
        return this.outputs.filter(output =>
            output.people.includes(personName)
        );
    }

    filterByType(type) {
        return this.outputs.filter(output =>
            output.type === type
        );
    }

    renderOutput(output) {
        const div = document.createElement('div');
        div.className = 'publication';

        let html = `<h4>${output.title}</h4>`;

        if (output.people && output.people.length > 0) {
            html += `<p class="authors">${output.people.join(', ')}</p>`;
        }

        html += `<p class="venue">${output.venue || output.outlet}</p>`;

        if (output.description) {
            html += `<p>${output.description}</p>`;
        }

        if (output.url) {
            html += `<p><a href="${output.url}" target="_blank">Read ${output.type === 'publication' ? 'Article' : 'More'}</a></p>`;
        }

        div.innerHTML = html;
        return div;
    }

    renderOutputsList(outputs, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';

        if (outputs.length === 0) {
            container.innerHTML = '<p>No outputs available yet.</p>';
            return;
        }

        // Group by year
        const byYear = {};
        outputs.forEach(output => {
            const year = output.date.toString().substring(0, 4);
            if (!byYear[year]) {
                byYear[year] = [];
            }
            byYear[year].push(output);
        });

        // Render by year
        Object.keys(byYear).sort().reverse().forEach(year => {
            const yearHeader = document.createElement('h3');
            yearHeader.textContent = year;
            container.appendChild(yearHeader);

            byYear[year].forEach(output => {
                container.appendChild(this.renderOutput(output));
            });
        });
    }

    async renderPersonOutputs(personName, containerId) {
        await this.loadOutputs();
        const personOutputs = this.filterByPerson(personName);
        this.renderOutputsList(personOutputs, containerId);
    }

    async renderAllPublications(containerId) {
        await this.loadOutputs();
        const publications = this.filterByType('publication');
        this.renderOutputsList(publications, containerId);
    }

    async renderAllMedia(containerId) {
        await this.loadOutputs();
        const media = this.filterByType('media').concat(this.filterByType('commentary'));
        this.renderOutputsList(media, containerId);
    }
}

// Global instance
const outputManager = new OutputManager();
