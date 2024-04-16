var project_containers = document.getElementsByClassName("project-container");
for (var i = 0; i < project_containers.length; i++)
{
    (function() {

        var project_links = project_containers[i].getElementsByClassName("project-links")[0];
        
        // setup event for displaying project links
        project_containers[i].addEventListener('mouseenter', function() {
            project_links.style.left = '0';
        });

        // setup event for hiding hobby description
        project_containers[i].addEventListener('mouseleave', function() {
            project_links.style.left = '100%';
        });
    })();
}