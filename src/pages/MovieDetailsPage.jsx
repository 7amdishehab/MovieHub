import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { MoviesContext } from "../context/MovieContext";
import Spinner from "../components/common/Loading/Spinner";
import MovieHeroSection from "../components/details/MovieHeroSection";
import MovieInfoSection from "../components/details/MovieInfoSection";
import PosterWithInfo from "../components/details/PosterWithInfo";
import SectionTitle from "../components/common/SectionTitle";
import RecommendationsGrid from "../components/details/RecommendationsGrid";

function MovieDetailsPage() {
  const { id } = useParams();
  const {
    getMovieDetail,
    getMovieRecommendations,
    movieDetail: movie,
    loadingDetail: loading,
    recommendations,
    loadingRecommendations,
  } = useContext(MoviesContext);

  useEffect(() => {
    getMovieDetail(id);
    getMovieRecommendations(id);
  }, [getMovieDetail, getMovieRecommendations, id]);

  if (loading) return <Spinner />;
  if (!movie)
    return <div className="text-center text-white py-10">No movie found.</div>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <MovieHeroSection movie={movie} />
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <MovieInfoSection movie={movie} />
              </div>
              <div className="md:col-span-1">
                <PosterWithInfo
                  poster_path={movie.poster_path}
                  name={movie.title}
                  status={movie.status}
                  original_language={movie.original_language}
                  budget={movie.budget}
                  revenue={movie.revenue}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <SectionTitle>You Might Also Like</SectionTitle>
          <RecommendationsGrid
            items={recommendations}
            type="movie"
            loading={loadingRecommendations}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
